import React from 'react'
import Image from 'next/image'
import style from './style.module.css'
import Link from 'next/link'

function Movies({ catTitle, movies, isSeries = false, isCategory = false }) {
    return (
        <div className={style.movieSection}>
            <div className='container'>
                <h3>{catTitle}</h3>
                <ul className={style.movie}>
                    {movies.length > 0 && movies.map((item, index) => (
                        <li key={index}>
                            <Link href={
                                isCategory
                                    ?
                                    `${isSeries ? '../../series/' + item.id : '../../movies/' + item.id}`
                                    :
                                    isSeries ? `series/${item.id}` : `movies/${item.id}`}>
                                <Image
                                    src={item.poster_path ? `https://image.tmdb.org/t/p/original${item.poster_path}` : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII='}
                                    alt={item.original_title || item.original_name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    placeholder='blur'
                                    blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII='
                                />
                                <h4>{item.title || item.name}</h4>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Movies