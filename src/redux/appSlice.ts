import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IAppState {
    onlyFavorites: boolean;
    favorites: Array<string>;
    deleted: Array<string>;
}

const initialState: IAppState =  {
    onlyFavorites: true,
    favorites: [],
    deleted: []
}

export const appSlice = createSlice({
    name: 'appSlice',
    initialState,
    reducers: {
        addToFavorites (state, action: PayloadAction<string>) {
            state.favorites.push(action.payload);
        },
        removeFromFavorites (state, action: PayloadAction<string>) {
            state.favorites = state.favorites.filter(item => item !== action.payload);
        },
        deleteItem (state, action: PayloadAction<string>) {
            state.deleted.push(action.payload);
            state.favorites = state.favorites.filter(item => item !== action.payload);
        },
        toggleFavorites (state) {
            state.onlyFavorites = !state.onlyFavorites;
        }
    }
});

export const {addToFavorites, removeFromFavorites, deleteItem, toggleFavorites} = appSlice.actions
export default appSlice.reducer