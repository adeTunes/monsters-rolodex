import React from 'react'
import './cards.styles.css'

export const Cards = (props) => {
    const { name, email, id } = props.monster
    const link = `https://robohash.org/${id}?set=set2&size=180x180`
    return (
        <div className='card-container'>
            <img src={link} alt="" />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}