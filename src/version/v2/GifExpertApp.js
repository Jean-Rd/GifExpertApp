import React, { useState } from "react";
import AddCategory from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

const GifExpertApp = () => {


    const [selected, setSelected] = useState(["Naruto"]);

    //const handleAdd = () => {
    //    const newArrat = [...selected, "Maluma"];
    //    setSelected(newArrat);
    //}
    //<button onClick={handleAdd}>Subir</button>


    return <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories = {setSelected} />
        <hr></hr>
        <ol>
            {
                selected.map(arrayVal => {
                    return <GifGrid 
                            key= {arrayVal}
                            category = {arrayVal} 
                            />
                })
            }
        </ol>
    </>
};

export default GifExpertApp;