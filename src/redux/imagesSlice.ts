import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {dogApi} from '../dogApi';
import {nanoid} from 'nanoid';

interface IImagesState {
    status: 'fulfilled' | 'pending' | 'rejected' | null;
    error: string | null;
    data: {[key: string]: string};
}

const initialState: IImagesState = {
    error: null,
    status: null,
    data: {},
}

export const fetchData = createAsyncThunk(
    'imagesSlice/fetchData',
    async (arg?: number) => {
        return await dogApi.getRandomDogs(arg);
    });

export const imagesSlice = createSlice({
    name: 'imagesSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, ((state) => {
            state.status = 'pending';
            }))
            .addCase(fetchData.rejected, (state, {error}) => {
                state.status = 'rejected';
                state.error = error.message || 'Something went wrong :(';
            })
            .addCase(fetchData.fulfilled, (state, {payload}) => {
                state.status = 'fulfilled';
                payload.message.forEach(src => state.data[nanoid()] = src);
                state.error = null;
            })
    }
})

export default imagesSlice.reducer;