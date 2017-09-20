export const nextCard = () => ({
  type: 'NEXT_CARD'
});

export const revealAnswer = (currIndex) => ({
  type: 'REVEAL_ANSWER',
  currIndex
});
