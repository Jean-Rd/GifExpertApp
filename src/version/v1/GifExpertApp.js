import React, { useState } from "react";

const GifExpertApp = () => {

    const array = ["Naruto", "Sasuke", "Sakura", "Kakashi", "Jiraiya"];

    const [selected, setSelected] = useState(array);

    const handleAdd = () => {
        const newArrat = [...selected, "Maluma"];
        setSelected(newArrat);
    }

    return <>
        <h2>GifExpertApp</h2>
        <hr></hr>
        <button onClick={handleAdd}>Subir</button>
        <ol>
            {
                selected.map(arrayVal => {
                    return <li key={arrayVal}>{arrayVal}</li>
                })
            }
        </ol>
    </>
};

export default GifExpertApp;