import React from 'react'
import MovieArticle from '@/components/article/MovieArticle'
import { getUpcoming } from '@/services/Fetch'


//! SEO start //
export const metadata = {
    title: 'Upcoming Movies',
};
//! SEO end //

export default async function page() {
    let { results } = await getUpcoming()
    return (
        <>
            <h1 style={{textAlign:'center', paddingBottom: '10px', marginBottom: '10px', borderBottom: '1px solid #444'}}>Upcoming</h1>
            <MovieArticle resultsProp={results} />
        </>
    )
}