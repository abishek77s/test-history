export const getRandomRotation = () => Math.random() * 20 - 10;
export const getRandomScale = () => 0.9 + Math.random() * 0.2;

export const triggerConfetti = () => {
  return {
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  };
};