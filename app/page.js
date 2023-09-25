import React from 'react'
import { getTopRated, getTrending, getUpComing, getGenres } from '@/data/movies'
import Banner from '@/components/banner'
import Categories from '@/components/categories'
import Movies from '@/components/movies'

async function HomePage() {
  const [
    { results: trendingMovies },
    { genres },
    { results: upComingMovies },
    { results: topRatedMovies },
  ] = await Promise.all([
    getTrending('movie'),
    getGenres('movie'),
    getUpComing('movie/now_playing'),
    getTopRated('movie'),
  ])

  return (
    <>
      <Banner movie={trendingMovies[Math.floor(Math.random() * trendingMovies.length)]} />
      <Categories genres={genres} />
      <Movies catTitle='POPÜLER OLANLAR FİLMLER' movies={trendingMovies.slice(0, 8)} />
      <Movies catTitle='VİZYONDA OLAN FİLMLER' movies={upComingMovies.slice(0, 8)} />
      <Movies catTitle='EN BEĞENİLENLER FİLMLER' movies={topRatedMovies.slice(0, 8)} />
    </>
  )
}

export default HomePage