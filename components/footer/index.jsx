import Link from 'next/link'
import React from 'react'
import style from './style.module.css'
import { FaGithub } from 'react-icons/fa6';

function Footer() {
    return (
        <footer className={style.footer}>
            <div className='container'>
                <Link
                    href={'https://github.com/gokhandemr'}
                    target='_blank'
                    rel="nofollow noopener noreferrer"
                >
                    <FaGithub /> Gökhan Demir
                </Link>
            </div>
        </footer>
    )
}

export default Footer
