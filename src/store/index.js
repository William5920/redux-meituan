import { configureStore } from '@reduxjs/toolkit';
import foodsReducer from './modules/foodsReducer';

const store = configureStore({
    reducer: {
        foods: foodsReducer
    }
});

export default store;