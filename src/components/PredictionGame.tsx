import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DndContext, DragEndEvent, DragStartEvent, useSensor, useSensors, PointerSensor } from '@dnd-kit/core';
import { restrictToWindowEdges } from '@dnd-kit/modifiers';
import confetti from 'canvas-confetti';
import { DomainStats } from '../types';
import { Draggable } from './PredictionGame/Draggable';
import { Droppable } from './PredictionGame/Droppable';

interface PredictionGameProps {
  topSites: DomainStats[];
  onComplete: () => void;
}

export const PredictionGame: React.FC<PredictionGameProps> = ({ topSites, onComplete }) => {
  const [predictions, setPredictions] = useState<Array<string | null>>([null, null, null]);
  const [activeDomain, setActiveDomain] = useState<string | null>(null);
  const [completedPredictions, setCompletedPredictions] = useState<boolean[]>([false, false, false]);

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

    // Check if the prediction is correct
    const isCorrect = domain === topSites[droppableId].domain;
    if (isCorrect) {
      const newCompleted = [...completedPredictions];
      newCompleted[droppableId] = true;
      setCompletedPredictions(newCompleted);

      // Trigger confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });

      // Check if all predictions are correct
      if (newCompleted.every(Boolean)) {
        setTimeout(onComplete, 1500);
      }
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
        >
          <div className="flex justify-center gap-4 mb-12">
            {[0, 1, 2].map((index) => (
              <Droppable
                key={index}
                id={index.toString()}
                prediction={predictions[index]}
                isCorrect={completedPredictions[index]}
                rank={index + 1}
              />
            ))}
          </div>

          <div className="grid grid-cols-5 gap-4 justify-items-center">
            {shuffledSites.map((site, index) => {
              const isUsed = predictions.includes(site.domain);
              if (isUsed) return null;

              const randomRotation = Math.random() * 20 - 10;
              const randomScale = 0.9 + Math.random() * 0.2;

              return (
                <motion.div
                  key={site.domain}
                  initial={{ rotate: randomRotation, scale: randomScale }}
                  whileHover={{ scale: 1.1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Draggable
                    id={site.domain}
                    isActive={activeDomain === site.domain}
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