import Link from 'next/link'
import React from 'react'
//pages and icons
import HeaderSearch from './HeaderSearch';
import { FaPlay } from "react-icons/fa";

export default function Header() {
  return (
    <header>
      <Link className='logo' href='/'><FaPlay /> NETFILMS</Link>
      <nav>
        <Link href={'/upcoming'}>Upcoming</Link>
        <Link href={'/populer'}>Populer</Link>
        <Link href={'/top-rated'}>Top Rated</Link>
      </nav>
      <HeaderSearch />
    </header>
  )
}