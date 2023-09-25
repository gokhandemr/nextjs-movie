import React from 'react'
import style from './style.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { FaUpRightFromSquare, FaCirclePlay } from 'react-icons/fa6';
import { getVideoURL } from '@/data/movies';

async function Banner({ movie = {}, isSingle = false, isSeries = false }) {
    const { backdrop_path, title, name, overview, id, genres, original_title, original_name, popularity } = movie
    // fragman 
    const { results: youtubeURL } = await getVideoURL(isSeries ? 'tv' : 'movie', Number(id))
    return (
        <section className={isSingle ? style.banner + ' ' + style.singlePage : style.banner} >
            <div className={style.bannerIMG}>
                <Image
                    unoptimized
                    src={backdrop_path !== null
                        ? `https://image.tmdb.org/t/p/original${backdrop_path} `
                        : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII='
                    }
                    alt={title || name}
                    fill
                />
                <div className={style.bannerShadow}></div>
            </div>

            <div className='container'>
                <h2>{title || name}</h2>
                <p>{overview ? overview : 'Malesef henüz Türkçe açıklama girilmedi'}</p>
                <Link className={style.playMovie} href={isSeries ? 'series/' + id : 'movies/' + id} >
                    <FaCirclePlay />
                    Detaylarına Bak
                </Link>
                {

                    youtubeURL.length > 0 &&
                    <Link
                        href={`https://www.youtube.com/watch?v=${youtubeURL[0].key}`}
                        className={style.addButton}
                        target='_blank'
                        rel="nofollow noopener noreferrer"
                    >
                        <FaUpRightFromSquare /> Fragmana Git
                    </Link>
                }


                <div className={style.movieDetails}>
                    <h3>Detaylar</h3>
                    <div>
                        <p>Orjinal Adı: {original_title || original_name}</p>
                        <p>Kategori: {genres && genres.map(item => item.name + ' ')}</p>
                        <p>Görüntülenme: {popularity}</p>
                        {youtubeURL.length > 0 &&
                            <p>
                                Fragman Adresi:
                                <Link
                                    href={`https://www.youtube.com/watch?v=${youtubeURL[0].key}`}
                                    target='_blank'
                                    rel="nofollow noopener noreferrer"
                                > https://www.youtube.com/watch?v={youtubeURL[0].key}</Link>
                            </p>
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner