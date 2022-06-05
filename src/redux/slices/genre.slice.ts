import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IGenre, IGenres} from "../../interfaces";
import {genreService} from "../../services";


interface IState {
    genres: IGenre[];
}

const initialState: IState = {
    genres: [],
};

const getAll = createAsyncThunk<IGenres, void>(
    'genreSlice/getAll',
    async () => {
        const {data} = await genreService.getAll();
        return data;
    }
);

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.genres = action.payload.genres;
                // console.log(state.genres);
            })
    }
})

const {reducer: genreReducer, actions: {}} = genreSlice;

const genreActions = {
    getAll
}

export {
    genreReducer,
    genreActions
}