import {FC, useEffect, useState} from "react";

import {movieService} from "../../services";
import {IMovieDetails, IRating} from "../../interfaces";
import {useLocation, useSearchParams} from "react-router-dom";
import style from './SingleMovie.module.css';
import {StarRating} from "../StarRating/StarRating";
import {urlPoster} from "../../constants";

const SingleMovie: FC = () => {

    const [singleMovie, setSingleMovie] = useState<IMovieDetails>();
    const [query, setQuery] = useSearchParams({page: '1', with_genres: ''});
    const {state} = useLocation();

    const rating: IRating = {
        ratingValue: singleMovie?.vote_average as number,
        iconsCount: 10,
        size: 20,
        readonly: true,
        fillColor: '#344a54',
        emptyColor: 'powderblue',
    }

    useEffect(() => {
        movieService.getById(state as string).then(({data}) => setSingleMovie(data))

        /*        const getSingleMovie = async () => {
                  const {data} =  await movieService.getById(state as string);
                    setSingleMovie(data);
                };
                getSingleMovie();*/
    }, [])

    const getTimeFromMins = (mins: number | any): string => {
        let hours = Math.trunc(mins / 60);
        let minutes = mins % 60;
        return hours + 'h ' + minutes + 'm';
    };

    const getListOfGenres = (): string => {
        let movieGenres: string[] = [];

        singleMovie?.genres.map(genre => {
            movieGenres.push(genre.name);
        })
        return movieGenres.join(', ');
    }

    return (
        <div>

            <div className={style.singleMovie}>
                <div className="movie-poster">
                    <img src={`${urlPoster}/${singleMovie?.backdrop_path}`} alt={singleMovie?.title}/>
                </div>
                <div className={style.movieInfo}>
                    <div className={style.movieInfoContainer}>
                        <div className={style.movieInfoTitle}>{singleMovie?.title}</div>

                        <div className={style.details}>
                            <div className={style.movieInfoRuntime}>{getTimeFromMins(singleMovie?.runtime)}</div>
                            <div className={style.movieInfoReleaseDate}>{singleMovie?.release_date}</div>
                            <div className={style.movieInfoGenres}>{getListOfGenres()}</div>
                        </div>

                        <div className={style.movieInfoOverview}>{singleMovie?.overview}</div>
                    </div>

                    <div className={style.movieInfoRating}>
                        <p>Rate: {singleMovie?.vote_average}</p>
                        <StarRating ratingProps={rating}/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export {SingleMovie};