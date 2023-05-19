'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import style from '@/components/banner/banner.module.css'

export default function Banner({ resultsProp }) {

    let [count, setCount] = useState(0)
    let maxMovie = resultsProp.length
    function nextButton() {
        if (count === maxMovie - 1) {
            setCount(0)
        } else {
            setCount(count + 1)
        }
    }
    function previousButton() {
        if (count === 0) {
            setCount(maxMovie - 1)
        } else {
            setCount(count - 1)
        }
    }
    return (
        <section className={style.banner}>
            <h2 className={style.bannerBaslik}>{resultsProp[count].title}</h2>
            <p className={style.bannerText}>{resultsProp[count].overview}</p>
            <Image className={style.bannerImage} style={{ objectFit: "cover" }} src={'https://image.tmdb.org/t/p/original' + resultsProp[count].backdrop_path} alt={resultsProp[count].title} fill quality={50} priority />
            <div className={style.shadow}></div>
            <Link className={style.playButton} href={'/' + resultsProp[count].id}>Play</Link>
            <button className={style.nextPrevButton} href='#' onClick={() => (nextButton())}>next movie</button>
            <button className={style.nextPrevButton} href='#' onClick={() => (previousButton())}>previous movie</button>
        </section>
    )
}