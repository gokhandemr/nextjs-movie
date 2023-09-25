import React from 'react'
import style from './style.module.css'
import Link from 'next/link'

async function Categories({ genres, isSeries = false }) {
    return (
        <section className={style.categories}>
            <ul className='container'>
                {genres && genres.map((item) => (
                    <li key={item.id}>
                        <Link href={isSeries ? `/category/series/${item.id}` : `/category/movies/${item.id}`} >{item.name}</Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Categories