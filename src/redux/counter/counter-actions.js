import { createAction } from '@reduxjs/toolkit';
import actionTypes from './counter-types';

export const increment = createAction(actionTypes.INCREMENT); //передаем аргументом то что было в type в старом виде, payload передаем через вызов increment(...)

// export const increment = value => ({
//   type: actionTypes.INCREMENT,
//   payload: value,
// });

export const decrement = createAction(actionTypes.DECREMENT); // для вложенных обьектов используем второй параметр createAction(type, prepareAction)

// export const decrement = value => ({
//   type: actionTypes.DECREMENT,
//   payload: value,
// });
