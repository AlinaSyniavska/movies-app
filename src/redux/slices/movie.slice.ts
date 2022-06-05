import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovieShortInfo, IMoviesList} from "../../interfaces";
import {movieService} from "../../services";


interface IState {
    movies: IMovieShortInfo[];
    totalPages: number;
}

const initialState: IState = {
    movies: [],
    totalPages: 1,
};

const getAll = createAsyncThunk<IMoviesList, { page: string, with_genres: string}>(
    'movieSlice/getAll',
    async ({page, with_genres}) => {
        const {data} = await movieService.getAll(page, with_genres);
        return data;
    }
);



const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload.results;
                state.totalPages = action.payload.total_pages;
            })
    }
})

const {reducer: movieReducer, actions: {}} = movieSlice;

const movieActions = {
    getAll
}

export {
    movieReducer,
    movieActions
}