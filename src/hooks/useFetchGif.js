import { useState, useEffect } from "react"

import { getGif } from "../helpers/getGif";

export const useFetchGif = (category) => {


    const [ state, setState ] = useState( {
        data: [],
        loading: true
    } );
    
    useEffect(() => {
        getGif( category )
            .then( img => setState({
                data: img,
                loading: false
            }) )
    }, [ category ]) // Aca le decimos que la si la category cambia
    // volvamos a ejecutar esta peticion.
    return state;

}
