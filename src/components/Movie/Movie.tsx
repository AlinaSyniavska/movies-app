import {FC} from "react";

import style from './Movie.module.css';
import {IMovieShortInfo} from "../../interfaces";
import {urlPoster} from "../../constants";


interface IProps {
    movie: IMovieShortInfo;
}

const Movie: FC<IProps> = ({movie}) => {

    const {title, poster_path, genre_ids, vote_average} = movie;

    return (
        <div>

            {/*<div [className]=['movie-card'] [routerLink]=[movie.id]>*/}
            <div className={style.movieCard}>
                <div className={style.moviePoster}>
                    <img src={`${urlPoster}/${poster_path}`} alt={title}/>
                </div>

                <div className={style.movieInfo}>
                    <div className={style.description}>
                        <div className={style.movieInfoTitle}>{title}</div>
                        <div className={style.movieInfoGenres}>{genre_ids}</div>
                    </div>
                    <div className={style.movieInfoRating}>{vote_average}
                        {/*<ngbd-rating-decimal [currentRate]=movie.vote_average></ngbd-rating-decimal>*/}
                    </div>
                </div>
            </div>


        </div>
    );
};

export {Movie};