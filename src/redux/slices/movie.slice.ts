import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IMovieShortInfo, IMoviesList} from "../../interfaces";
import {movieService} from "../../services";


interface IState {
    movies: IMovieShortInfo[];
    totalPages: number;
    page: string;
    with_genres: string;
}

const initialState: IState = {
    movies: [],
    totalPages: 1,
    page: '1',
    with_genres: '',
};

const getAll = createAsyncThunk<IMoviesList, { page: string, with_genres: string }>(
    'movieSlice/getAll',
    async ({page, with_genres}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page, with_genres);
            return data;
        } catch (error: any) {
            return rejectWithValue(error.response.data)
        }
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setQueryParams: (state, action) => {
            state.page = action.payload.page;
            state.with_genres  = action.payload.with_genres;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload.results;
                state.totalPages = action.payload.total_pages;
            })
            .addCase(getAll.rejected, (state, action) => {
                const {errors} = action.payload as any;
                alert(errors);
            })
    }
})

const {reducer: movieReducer, actions: {setQueryParams}} = movieSlice;

const movieActions = {
    getAll,
    setQueryParams,
}

export {
    movieReducer,
    movieActions,
}