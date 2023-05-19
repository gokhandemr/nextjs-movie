import React from 'react'
import { getPopulerMovies } from '@/services/Fetch'
import MovieArticle from '@/components/article/MovieArticle'

//! SEO start //
export const metadata = {
    title: 'Populer Movies',
};
//! SEO end //

export default async function page() {
    let { results } = await getPopulerMovies()
    return (
        <>
            <h1 style={{textAlign:'center', paddingBottom: '10px', marginBottom: '10px', borderBottom: '1px solid #444'}}>Populer</h1>
            <MovieArticle resultsProp={results} />
        </>
    )
}