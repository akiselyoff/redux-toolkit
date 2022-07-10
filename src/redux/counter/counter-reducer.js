import { combineReducers } from 'redux';
import actionTypes from './counter-types';

const initialValue = 0;

const valueReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case actionTypes.INCREMENT:
      return state + payload;

    case actionTypes.DECREMENT:
      return state - payload;

    default:
      return state;
  }
};

const stepReducer = (state = 2, action) => state;

export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});
