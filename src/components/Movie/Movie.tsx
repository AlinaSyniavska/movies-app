import {FC} from "react";

import style from './Movie.module.css';
import {IMovieShortInfo} from "../../interfaces";
import {urlPoster} from "../../constants";
import {useAppSelector} from "../../hook";


interface IProps {
    movie: IMovieShortInfo;
}

const Movie: FC<IProps> = ({movie}) => {

    const {title, poster_path, genre_ids, vote_average} = movie;
    const {genres} = useAppSelector(state => state.genreReducer);

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
                    <div className={style.movieInfoRating}>{vote_average}
                        {/*<ngbd-rating-decimal [currentRate]=movie.vote_average></ngbd-rating-decimal>*/}
                    </div>
                </div>
            </div>


        </div>
    );
};

export {Movie};