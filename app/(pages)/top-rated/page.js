import React from 'react'
import MovieArticle from '@/components/article/MovieArticle'
import { getTopRated } from '@/services/Fetch'

//! SEO start //
export const metadata = {
    title: 'Top Rated Movies',
};
//! SEO end //

export default async function page() {
    let { results } = await getTopRated()
    return (
        <div>
            <h1 style={{textAlign:'center', paddingBottom: '10px', marginBottom: '10px', borderBottom: '1px solid #444'}}>Top Rated</h1>
            <MovieArticle resultsProp={results} />
        </div>
    )
}