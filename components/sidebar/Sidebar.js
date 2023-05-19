import Link from 'next/link'
import React from 'react'
import style from '@/components/sidebar/Sidebar.module.css'

export default async function Sidebar({ resultsProp }) {
    return (
        <aside className={style.categories}>
            <h3 className={style.categoriesH3}>Categories</h3>
            {
                resultsProp.map((item) => (
                    <Link className={style.categoriesLink} href={'categories/' + item.id} key={item.id}>{item.name}</Link>
                ))
            }
        </aside>
    )
}