import React from 'react'

export const GifGridItems = ({url, title}) => {
    return (
        <a href={url} target="_blank" rel="noreferrer">
            <div className="grid-item animate__animated animate__fadeIn">
                <img src={url} alt={title}></img>
                <h3>{title}</h3>
            </div>
        </a>
    )
}
