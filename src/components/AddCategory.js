import React, {useState} from 'react';
import PropTypes from 'prop-types';

//en los inputs hay que darles siempre un onChange

const AddCategory = ( {setCategorias} ) => {
    const [inputValue,setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2){
            
            setCategorias(categorias => [inputValue,...categorias]);
           
            setInputValue('');
        }
        
    }

    return(
        <form onSubmit = {handleSubmit}>
            <input type='text' value={inputValue} onChange={ handleInputChange } />
            <br /><br />
            <button onClick={ handleSubmit }>
                Agregar categoria
            </button>   
        </form>
    );
}

AddCategory.propTypes = {
    setCategorias:PropTypes.func.isRequired
}

export default AddCategory;