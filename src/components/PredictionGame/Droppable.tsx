import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { motion } from 'framer-motion';
import { DroppableProps } from './types';

export const Droppable: React.FC<DroppableProps> = ({ 
  id, 
  prediction, 
  isCorrect, 
  isWrong,
  rank 
}) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      className={`
        w-48 h-24
        rounded-lg
        flex items-center justify-center
        transition-colors
        relative
        ${isOver ? 'bg-indigo-100' : 'bg-gray-100'}
        ${isCorrect ? 'bg-green-100' : isWrong ? 'bg-red-50' : ''}
        border-2 border-dashed
        ${isOver ? 'border-indigo-400' : 'border-gray-300'}
        ${isCorrect ? 'border-green-400 border-solid' : isWrong ? 'border-red-300' : ''}
      `}
    >
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 font-bold text-gray-500">
        #{rank}
      </div>
      
      {prediction ? (
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className={`
            px-4 py-2 rounded-lg
            ${isCorrect ? 'bg-green-500 text-white' : isWrong ? 'bg-red-100 text-red-800' : 'bg-indigo-100 text-indigo-800'}
            font-medium text-sm
          `}
        >
          {prediction}
        </motion.div>
      ) : (
        <p className="text-gray-400">Drop here</p>
      )}
    </div>
  );
};