import React from 'react'
import { getGenres, getTopRated, getTrending, getUpComing } from '@/data/movies'
import Banner from '@/components/banner'
import Categories from '@/components/categories'
import Movies from '@/components/movies'

async function SeriesPage() {
    const [
        { results: trendingSeries },
        { genres },
        { results: upComingSeries },
        { results: topRatedSeries },
    ] = await Promise.all([
        getTrending('tv'),
        getGenres('tv'),
        getUpComing('tv/airing_today'),
        getTopRated('tv'),
    ])

    return (
        <>
            <Banner movie={trendingSeries[Math.floor(Math.random() * trendingSeries.length)]} isSeries={true} />
            <Categories genres={genres} isSeries={true} />
            <Movies catTitle='POPÜLER DİZİLER' movies={trendingSeries.slice(0, 8)} isSeries={true} />
            <Movies catTitle='VİZYONDA OLAN DİZİLER' movies={upComingSeries.slice(0, 8)} isSeries={true} />
            <Movies catTitle='EN BEĞENİLENLER DİZİLER' movies={topRatedSeries.slice(0, 8)} isSeries={true} />
        </>
    )
}

export default SeriesPage