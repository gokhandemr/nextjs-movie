'use client'
import { useRouter } from 'next/navigation';
import { FiSearch } from "react-icons/fi";

export default function HeaderSearch() {
    const router = useRouter();
    const searchFunc = () => {
        let inputValue = document.querySelector('#value').value
        if (inputValue !== '') {
            router.push('/' + inputValue)
        } else {
            alert('please do not leave the relevant field blank')
        }
    }
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <form onClick={(e) => (e.preventDefault())}>
                <input id='value' type='text' placeholder='search tmdb id' />
                <button onClick={searchFunc}><FiSearch /></button>
            </form>
        </div>
    )
}