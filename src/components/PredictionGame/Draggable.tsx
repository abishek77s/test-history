import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { DraggableProps } from './types';

export const Draggable: React.FC<DraggableProps> = ({ id, isActive, isWrong }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    position: 'relative',
    zIndex: isActive ? 1000 : 1,
  } : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`
        cursor-grab active:cursor-grabbing
        px-4 py-2 rounded-lg
        ${isActive ? 'bg-indigo-600 text-white' : isWrong ? 'bg-red-100 text-red-800' : 'bg-indigo-100 text-indigo-800'}
        font-medium text-sm
        transition-colors
        hover:bg-indigo-200
        shadow-sm
      `}
    >
      {id}
    </div>
  );
};