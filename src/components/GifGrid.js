import React from 'react'
// import { useState, useEffect } from 'react'
import { GifGridItems } from './GifGridItems'
// import { getGif } from '../helpers/getGif'
import { useFetchGif } from '../hooks/useFetchGif'

export const GifGrid = ({category}) => {

    
    const {data:images, loading} = useFetchGif(category);

    return (
        <div className="grid">
            <h2 className="animate__animated animate__bounce">{ category }</h2>

            { loading && <p className="animate__animated animate__flash">Cargando...</p> }

            {
                images.map( (img) => {
                    return <GifGridItems 
                        key={img.id}
                        {...img}
                    />
                })
            }
            
        </div>
    )
}
