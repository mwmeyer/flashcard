import {
  combineReducers,
} from 'redux';

// reducers.js
const randomNumberUpTo = (limit) => {
  return Math.floor(Math.random() * limit) + 1;
}

const generateMathQuestion = () => {
  let leftDigit = randomNumberUpTo(12);
  let rightDigit = randomNumberUpTo(12);
  return {question: `${leftDigit} x ${rightDigit}`, answer: leftDigit * rightDigit, revealed: false}
};

const defaultState = {
                      currIndex: 0,
                      list: Array.from({length: 100}, () => generateMathQuestion() )
                     };

export const card = (state = defaultState, action) => {
  switch (action.type) {
    case 'NEXT_CARD':
      return {...state, currIndex: state.currIndex + 1 };
    case 'REVEAL_ANSWER':
      return {...state, list: state.list.map( (v, i) => i === action.currIndex ? { ...v, revealed: true } : v ) };
    default:
      return state;
  }
};

export const reducers = combineReducers({
  card,
});
