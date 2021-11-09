import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IAppState {
    onlyFavorites: boolean;
    favorites: Array<string>;
    deleted: Array<string>;
}

const initialState: IAppState =  {
    onlyFavorites: false,
    favorites: [],
    deleted: [],
}

export const appSlice = createSlice({
    name: 'appSlice',
    initialState,
    reducers: {
        toggleFavorites (state) {
            state.onlyFavorites = !state.onlyFavorites
        },
        toggleLike (state, {payload}: PayloadAction<string>) {
            const index = state.favorites.indexOf(payload);
            if (index === -1) {
                state.favorites.push(payload);
            }
            else {
                state.favorites.splice(index, 1);
                if (!state.favorites.length) {
                    state.onlyFavorites = false;
                }
            }
        },
        deleteItem (state, {payload}: PayloadAction<string>) {
            state.deleted.push(payload);
            state.favorites = state.favorites.filter(id => id !== payload);
        },
    }
});

export const {deleteItem, toggleFavorites, toggleLike} = appSlice.actions
export default appSlice.reducer