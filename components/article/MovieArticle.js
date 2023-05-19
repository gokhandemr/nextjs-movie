import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import style from './MovieArticle.module.css'

export default function MovieArticle({ resultsProp, titleProp }) {
  return (
    <div className={style.article}>
      {titleProp && <h3 className={style.articleH3}>{titleProp}</h3>}
      {resultsProp.map(item => (
        <article className={style.articleItem}>
          <Link href={'/' + item.id}>
            <Image className={style.articleImage} src={'https://image.tmdb.org/t/p/original' + item.poster_path} alt={item.original_title} priority width={202} height={280} />
          </Link>
        </article>
      ))
      }
    </div>
  )
}