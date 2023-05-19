import React from 'react';
import { notFound } from 'next/navigation';
import MovieArticle from '@/components/article/MovieArticle';
import { getGenreMovies, getCategoryMovies } from '@/services/Fetch'


//! SEO start //
export async function generateMetadata({ params }) {
  let { genres } = await getGenreMovies()
  let cat = genres.find(item => item.id === Number(params.slug) && item.name)
  return {
    title: cat.name,
  };
}
//! SEO end //

export default async function page({ params }) {
  let { results: movies } = await getCategoryMovies(params.slug)
  let { genres } = await getGenreMovies()
  let cat = genres.find(item => item.id === Number(params.slug) && item.name)

  if (movies.length <= 0) {
    notFound()
  }
  return (
    <div>
      <h1 style={{textAlign:'center', paddingBottom: '10px', marginBottom: '10px', borderBottom: '1px solid #444'}}>{cat.name}</h1>
      <MovieArticle resultsProp={movies} />
    </div>
  )
}