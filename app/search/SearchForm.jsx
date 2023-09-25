'use client'
import React from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'

function SearchForm({ formSubmit, valueInput, setValueInput, radioValue, setRadioValue, setMovies }) {
    return (
        <form onSubmit={(e) => (formSubmit(e))}>
            <div>
                <input type="radio" value="movie" onChange={() => (setRadioValue("movie"), setMovies([]))} checked={radioValue === "movie"} />
                <label>Film</label>
                <input type="radio" value="tv" onChange={() => (setRadioValue("tv"), setMovies([]))} checked={radioValue === "tv"} />
                <label>Dizi</label>
            </div>
            <div>
                <input type='text' placeholder='film veya dizi adı' value={valueInput} onChange={(e) => (setValueInput(e.target.value))} required />
                <button><FaMagnifyingGlass /></button>
            </div>
        </form>
    )
}

export default SearchForm