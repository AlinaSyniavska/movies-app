import {FC, useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hook";
import {movieActions} from "../../redux";
import {Movie} from "../Movie/Movie";
import style from './Movies.module.css';

const Movies: FC = () => {

    const {movies} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    const [query, setQuery] = useSearchParams({page: '1', with_genres: ''});

    useEffect(() => {
        dispatch(movieActions.getAll({page: '1', with_genres: ''}))
    }, [dispatch])

    return (
        <div>
            <div className={style.container}>{
                movies.map(movie => <Movie key={movie.id} movie={movie}/>)
            }</div>
        </div>
    );
};

export {Movies};