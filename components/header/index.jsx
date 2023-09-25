import Link from 'next/link'
import React from 'react'
import { FaCirclePlay } from "react-icons/fa6";
import style from './style.module.css'

function Header() {
    return (
        <header className={style.header}>
            <div className='container'>
                <Link href={'/'} className={style.logo}>
                    <h1>
                        <FaCirclePlay /> FILM<span>SITESI</span>
                    </h1>
                </Link>

                <nav className={style.menu}>
                    <Link href={'/'}>FİLMLER</Link>
                    <Link href={'/series'}>DİZİLER</Link>
                    <Link href={'/search'}>ARA</Link>
                </nav>

            </div>
        </header>
    )
}

export default Header