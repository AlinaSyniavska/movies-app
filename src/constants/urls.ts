const baseURL = process.env.REACT_APP_API;

const urls = {
    movies: '/discover/movie',
    movie: '/movie',
    genres: '/genre/movie/list',
    search: '/search/keyword'
}

const urlPoster = 'https://image.tmdb.org/t/p/w500';

export {
    baseURL,
    urls,
    urlPoster
}
