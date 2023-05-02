import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Api from '../utils/api';

const api = new Api();

export const getCategories = createAsyncThunk(
    'categories/getCategories',
    async (_, { dispatch }) => {
        try {
            const result = await api.getCategories();
            console.log(result);
            dispatch(categoriesSet(result));
        } catch (err) {
            console.log(err);
        } finally {
            console.log('Finally!');
        }
    }
);

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        categories: [],
    },
    reducers: {
        categoriesSet(state, action) {
            const categories = action.payload;
            return {
                ...state,
                categories,
            };
        },
    },
});

export const { categoriesSet } = categoriesSlice.actions;
export default categoriesSlice.reducer;
