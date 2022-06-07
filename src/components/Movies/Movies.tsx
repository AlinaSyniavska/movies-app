import {FC, useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hook";
import {genreActions, movieActions} from "../../redux";
import {Movie} from "../Movie/Movie";
import style from './Movies.module.css';
import {Pagination} from "../Pagination/Pagination";

const Movies: FC = () => {

    const {movies, page, with_genres} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    const [query, setQuery] = useSearchParams({page: `${page}`, with_genres: `${with_genres}`});

    useEffect(() => {
        dispatch(movieActions.setQueryParams({page: query.get('page'), with_genres: `${with_genres}`}))
        setQuery({page: `${page}`, with_genres: `${with_genres}`})
        dispatch(genreActions.getAll());
    }, [page])

    useEffect(() => {
        dispatch(movieActions.setQueryParams({page: query.get('page'), with_genres: `${with_genres}`}))

        dispatch(movieActions.getAll({page:query.get('page') || '1', with_genres: `${with_genres}`}))
    }, [query])

    return (
        <div>
            <Pagination/>
            <div className={style.container}>{
                movies.map(movie => <Movie key={movie.id} movie={movie}/>)
            }</div>
        </div>
    );
};

export {Movies};