const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: process.env.API,
    }
}
const getMovies = async (list) => {
    const resp = await fetch('https://api.themoviedb.org/3/' + list + '?language=en-US&page=1', options)
    return resp.json()
}
// category page movie list
export const getCategoryMovies = async (id) => {
    const resp = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=' + id, options)
    return resp.json()
}


export const getPopulerMovies = async () => {
    return getMovies('trending/movie/day')
}
export const getTopRated = async () => {
    return getMovies('movie/top_rated')
}
export const getUpcoming = async () => {
    return getMovies('movie/upcoming')
}
// categoty list
export const getGenreMovies = async () => {
    return getMovies('genre/movie/list')
}
// single movie page
export const singleMovieDetails = async (slug) => {
    let resp = await fetch('https://api.themoviedb.org/3/movie/' + slug + '?language=en-US', options)
    return resp.json()
}
export const singleMovieTrailer = async (slug) => {
    const resp = await fetch('https://api.themoviedb.org/3/movie/' + slug + '/videos?language=en-US', options)
    return resp.json()
}
// favorite movies
export const favoriteMovies = async () => {
    return getMovies('list/8253459')
}