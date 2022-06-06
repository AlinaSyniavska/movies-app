import {FC, useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hook";
import {genreActions, movieActions} from "../../redux";
import {Movie} from "../Movie/Movie";
import style from './Movies.module.css';

const Movies: FC = () => {

    const {movies, currentPage, genreIds} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    const [query, setQuery] = useSearchParams({page: `${currentPage}`, with_genres: `${genreIds}`});

    useEffect(() => {
        dispatch(movieActions.setQueryParams({currentPage: query.get('page'), genreIds: query.get('with_genres')}))
        setQuery({page: `${currentPage}`, with_genres: `${genreIds}`})
        dispatch(genreActions.getAll());
    }, [currentPage, genreIds])

    useEffect(() => {
        dispatch(movieActions.setQueryParams({currentPage: query.get('page'), genreIds: query.get('with_genres')}))

        dispatch(movieActions.getAll({page:query.get('page') || '1', with_genres:query.get('with_genres') || ''}))
    }, [query])   //[query, dispatch]

    return (
        <div>
            <div className={style.container}>{
                movies.map(movie => <Movie key={movie.id} movie={movie}/>)
            }</div>
        </div>
    );
};

export {Movies};