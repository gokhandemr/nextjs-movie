'use client' // Error components must be Client Components
import { useEffect } from 'react'

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className='errorPage'>
            <div className='container'>
                <h2>Bir şeyler yanlış gitti!</h2>
                <button onClick={() => reset()}>Tekrar dene</button>
            </div>
        </div>
    )
}