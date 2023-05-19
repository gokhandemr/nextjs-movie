// pages
import Banner from '@/components/banner/Banner'
import Sidebar from '@/components/sidebar/Sidebar'
import MovieArticle from '@/components/article/MovieArticle'
import { getPopulerMovies, getTopRated, getUpcoming, getGenreMovies, favoriteMovies } from '@/services/Fetch'


export default async function Home() {
  let [
    { results: populer },
    { results: toprated },
    { results: upcoming },
    { genres: genresFilms },
    { items: favorites },
  ] = await Promise.all([
    getPopulerMovies(),
    getTopRated(),
    getUpcoming(),
    getGenreMovies(),
    favoriteMovies(),
  ])
  return (
    <>
      <Banner resultsProp={populer.slice(0, 5)} />
      <Sidebar resultsProp={genresFilms} />
      <div style={{ width: '70%' }}>
        <MovieArticle resultsProp={favorites.slice(0, 5)} titleProp={'My Favorite Movies'} />
        <MovieArticle resultsProp={upcoming.slice(1, 6)} titleProp={'Upcoming'} />
        <MovieArticle resultsProp={populer.slice(0, 5)} titleProp='Populer' />
        <MovieArticle resultsProp={toprated.slice(0, 5)} titleProp='Top Rated' />
      </div>
    </>
  )
}