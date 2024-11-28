import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DndContext, DragEndEvent, DragStartEvent, useSensor, useSensors, PointerSensor, pointerWithin } from '@dnd-kit/core';
import { restrictToWindowEdges } from '@dnd-kit/modifiers';
import confetti from 'canvas-confetti';
import { Draggable } from './Draggable';
import { Droppable } from './Droppable';
import { PredictionGameProps } from './types';
import { getRandomRotation, getRandomScale, triggerConfetti } from './utils';

export const PredictionGame: React.FC<PredictionGameProps> = ({ topSites, onComplete }) => {
  const [predictions, setPredictions] = useState<Array<string | null>>([null, null, null]);
  const [activeDomain, setActiveDomain] = useState<string | null>(null);
  const [completedPredictions, setCompletedPredictions] = useState<boolean[]>([false, false, false]);
  const [wrongPredictions, setWrongPredictions] = useState<boolean[]>([false, false, false]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const shuffledSites = [...topSites.slice(0, 10)].sort(() => Math.random() - 0.5);

  const handleDragStart = (event: DragStartEvent) => {
    setActiveDomain(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveDomain(null);

    if (!over) return;

    const droppableId = parseInt(over.id as string);
    const domain = active.id as string;
    
    const newPredictions = [...predictions];
    newPredictions[droppableId] = domain;
    setPredictions(newPredictions);

    const isCorrect = domain === topSites[droppableId].domain;
    const newCompleted = [...completedPredictions];
    const newWrong = [...wrongPredictions];

    if (isCorrect) {
      newCompleted[droppableId] = true;
      newWrong[droppableId] = false;
      setCompletedPredictions(newCompleted);
      setWrongPredictions(newWrong);

      confetti(triggerConfetti());

      if (newCompleted.every(Boolean)) {
        setTimeout(onComplete, 1500);
      }
    } else {
      newWrong[droppableId] = true;
      setWrongPredictions(newWrong);
      setTimeout(() => {
        const resetPredictions = [...predictions];
        resetPredictions[droppableId] = null;
        setPredictions(resetPredictions);
        const resetWrong = [...wrongPredictions];
        resetWrong[droppableId] = false;
        setWrongPredictions(resetWrong);
      }, 1000);
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Guess Your Top 3 Most Visited Websites!
      </h2>
      
      <div className="mb-8">
        <DndContext
          sensors={sensors}
          modifiers={[restrictToWindowEdges]}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          collisionDetection={pointerWithin}
        >
          <div className="flex justify-center gap-4 mb-12">
            {[0, 1, 2].map((index) => (
              <Droppable
                key={index}
                id={index.toString()}
                prediction={predictions[index]}
                isCorrect={completedPredictions[index]}
                isWrong={wrongPredictions[index]}
                rank={index + 1}
              />
            ))}
          </div>

          <div className="grid grid-cols-5 gap-4 justify-items-center">
            {shuffledSites.map((site, index) => {
              const isUsed = predictions.includes(site.domain);
              if (isUsed) return null;

              return (
                <motion.div
                  key={site.domain}
                  initial={{ rotate: getRandomRotation(), scale: getRandomScale() }}
                  whileHover={{ scale: 1.1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Draggable
                    id={site.domain}
                    isActive={activeDomain === site.domain}
                    isWrong={wrongPredictions.some((wrong, idx) => wrong && predictions[idx] === site.domain)}
                  />
                </motion.div>
              );
            })}
          </div>
        </DndContext>
      </div>
    </div>
  );
};