import React from 'react'
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import style from './slug.module.css'
import { singleMovieDetails, singleMovieTrailer } from '@/services/Fetch';

//! SEO //
export async function generateMetadata({ params }) {
    let { title, overview } = await singleMovieDetails(params.slug)
    return {
        title: title,
        description: overview,
    };
}
//! SEO //


export default async function page({ params }) {
    let { title, overview, popularity, poster_path, vote_average, backdrop_path, id, release_date, homepage, genres } = await singleMovieDetails(params.slug)
    let { results: trailer } = await singleMovieTrailer(params.slug)
    let keys = trailer ? trailer.map(item => item.key) : ''


    if (id !== Number(params.slug)) {
        notFound()
    }
    return (
        <>
            <div className={style.moviePage}>
                <Image className={style.movieImage} src={'https://image.tmdb.org/t/p/original' + poster_path} alt={title} priority width={202} height={280} />
                <h1 className={style.movieTitle}>{title}</h1>
                <p className={style.movieText}>{overview}</p>
                <p className={style.movieText}>Views: {popularity}</p>
                <p className={style.movieText}>Vote Average: {vote_average}</p>
                <p className={style.movieText}>Release date: {release_date}</p>
                {homepage &&
                    <p className={style.movieText}>
                        Homepage:
                        <Link href={homepage} target='_blank'>{homepage}</Link>
                    </p>}
                <p className={style.movieText}>Genres: {genres.map(i => <Link href={'categories/' + i.id} style={{ margin: '0 3px' }}>{i.name}</Link>)}</p>

                <h2 className={style.movieH2}>Trailer: {title}</h2>
                <div className={style.movieIframeContainer}>
                    <iframe className={style.movieIframe} width="420" height="345" src={`https://www.youtube.com/embed/${keys[0]}`}></iframe>
                </div>
            </div>
            <Image className={style.movieBackground} style={{ objectFit: "cover" }} src={'https://image.tmdb.org/t/p/original' + backdrop_path} blurDataURL={'https://image.tmdb.org/t/p/original' + backdrop_path} alt={title} fill quality={25} priority placeholder={'blur'} unoptimized />
            <div className={style.shadow}></div>
        </>
    )
}