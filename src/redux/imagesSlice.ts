import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {dogApi, IDogData} from '../dogApi';

interface IImagesState {
    loading: boolean;
    error: string | null;
    data: IDogData | null;
}

const initialState: IImagesState = {
    loading: false,
    error: null,
    data: null,
}

export const fetchData = createAsyncThunk(
    'imagesSlice/fetchData',
    async (arg?: number) => {
            return await dogApi.getRandomDogs(arg);
});

export const imagesSlice = createSlice({
    name: 'imagesSlice',
    initialState,
    reducers: {
        setData(state, action: PayloadAction<IDogData>) {
            state.data =  action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, ((state) => {
            state.loading = true;
            }))
            .addCase(fetchData.rejected, (state, {error}) => {
                state.loading = false;
                state.error = error.message || 'Something went wrong :(';
            })
            .addCase(fetchData.fulfilled, (state, {payload}) => {
                state.data = payload;
                state.error = null;
                state.loading = false;
            })
    }
})

export default imagesSlice.reducer;