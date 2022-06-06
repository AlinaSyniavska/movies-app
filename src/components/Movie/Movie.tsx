import {FC} from "react";

import style from './Movie.module.css';
import {IMovieShortInfo, IRating} from "../../interfaces";
import {urlPoster} from "../../constants";
import {useAppSelector} from "../../hook";
import {StarRating} from "../StarRating/StarRating";

interface IProps {
    movie: IMovieShortInfo;
}

const Movie: FC<IProps> = ({movie}) => {

    const {title, poster_path, genre_ids, vote_average} = movie;
    const {genres} = useAppSelector(state => state.genreReducer);

    const rating: IRating = {
            ratingValue: +vote_average,
            iconsCount: 10,
            size: 20,
            readonly: true,
            fillColor: '#344a54',
            emptyColor: 'powderblue',
    }

    function getListOfGenres(): string {
        let movieGenres: string[] = [];

        genre_ids.map(id => {
            const index = genres.findIndex(item => item.id === id);
            movieGenres.push(genres[index]["name"]);
        })

        return movieGenres.join(', ');
    }

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
                        <div className={style.movieInfoGenres}>{getListOfGenres()}</div>
                    </div>
                    <div className={style.movieInfoRating}>
                        <p>Rate: {vote_average}</p>
                        <StarRating ratingProps={rating}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {Movie};