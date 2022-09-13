import React from 'react'
import './search-box.styles.css'

export const SearchBox = ({ searchField, placeholder, handleChange }) => {
    return (
        <input className='search' type="search" placeholder={placeholder} value={searchField} onChange={handleChange}/>
    )
}