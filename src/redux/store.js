import { configureStore, combineReducers } from '@reduxjs/toolkit';
import accountReducer from './slices/account';

  const reducer = combineReducers({
    accountReducer,
  })


  export const store =  configureStore({
    reducer
  })