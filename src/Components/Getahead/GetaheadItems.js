import React from 'react'
import './getaheaditems.css'

export const GetaheadItems = ({ title, description, more }) => {
    return (
        <div className='Items'>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{more}</p>
        </div>
    )
}
