import { DomainStats } from '../../types';

export interface PredictionGameProps {
  topSites: DomainStats[];
  onComplete: () => void;
}

export interface DraggableProps {
  id: string;
  isActive: boolean;
  isWrong?: boolean;
}

export interface DroppableProps {
  id: string;
  prediction: string | null;
  isCorrect: boolean;
  isWrong?: boolean;
  rank: number;
}