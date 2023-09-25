'use client'
import React, { useState } from 'react'
import { getSearch } from '@/data/movies'
import Movies from '@/components/movies'
import SearchForm from './SearchForm'
import style from './style.module.css'

function SearchPage() {
    const [valueInput, setValueInput] = useState('')
    const [radioValue, setRadioValue] = useState('')
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const values = { valueInput, setValueInput, radioValue, setRadioValue, setMovies }

    const formSubmit = async (e) => {
        e.preventDefault()
        const value = valueInput.trim().replace(/[</>\\*'_!$½%{&}=|"`~¨´]/g, '')
        if (value !== '' && radioValue !== '') {
            setLoading(true)
            setMovies([])
            const { results } = await getSearch(radioValue, value)
            setLoading(false)
            setMovies(results)
        } else {
            alert('Hata: Arama alanını ve film-dizi filtreleme kısmını boş bırakmayınız!')
        }
    }

    return (
        <div className={style.searchPage}>
            <div className='container'>
                <SearchForm formSubmit={formSubmit} {...values} />
                {loading && <p className={style.text}>Yükleniyor..</p>}
                {movies && <Movies movies={movies} isCategory={true} isSeries={radioValue === 'movie' ? false : true} />}
                {loading === false && movies.length <= 0 ? <p className={style.text}>Henüz Arama Yapılmadı Veya Aranılan Film/Dizi Bulunamadı...</p> : ''}
            </div>
        </div>
    )
}

export default SearchPage