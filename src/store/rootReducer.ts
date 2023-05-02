import { combineReducers } from '@reduxjs/toolkit';
import categoriesReducer from '../store/CategoriesSlice';

// Сюда просто закинь, чтобы добавить редьюсеры новые
const rootReducer = combineReducers({
    categoriesReducer,
});

export type RootState = typeof rootReducer;

export default rootReducer;
