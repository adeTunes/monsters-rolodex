import './Card-list.style.css'
import React from 'react'
import { Cards } from '../cards/Cards.component'

export const CardList= (props) => {
    const { monsters, searchField } = props
  return (
    <div className='card-list'>
        {monsters.map(monster => (
            monster.name.toLowerCase().includes(searchField.toLowerCase()) && <Cards key={monster.id} monster={monster} />
        ))}
    </div>
  )
}