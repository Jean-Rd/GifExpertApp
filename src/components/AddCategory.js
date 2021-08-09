import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {   

    const [value, setValue] = useState("");
    // si queremos que el input esté vacio, debemos poner un string vacio
    // caso contrario la app manda un error.

    const valueChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(value.trim().length > 2){
            setCategories(val => [value, ...val]);
            setValue("");
        }
    }

    return (
        <>
           <form onSubmit={handleSubmit}>
               <input className="input" type="text" value={value} onChange={valueChange} placeholder="Escriba aqui"/>
           </form>
        </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
