import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';
//no se le puede cambiar el estado
//setCategoria puede regresar el nuevo estado o un callback en el que recibe el valor del estado anterior y regresa el nuevo estado

const GifExpertApp = () => {

    const [categorias,setCategorias] = useState(['Owl House']);

    /*const agregarCategoria = (e) => {
        const categoriaNueva = valor.current.value;
        setCategoria(prev => [categoriaNueva,...prev]);
    }*/

    //const valor = useRef();
  
    return(
        <>
            <h2>
                GifExpertApp
            </h2>
            <AddCategory setCategorias={setCategorias} />
            <hr />
            <ol>
                { 
                    categorias.map( (categoria,i) => 
                        <GifGrid 
                            key={ categoria.trim() } 
                            category={categoria} 
                        />
                    )
                }
            </ol>
            {/*
                <input type = 'text' ref={valor} />
                <button onClick={agregarCategoria}>
                    Agregar categoria
                </button>
            */}
            
        </>
    );

}

export default GifExpertApp;