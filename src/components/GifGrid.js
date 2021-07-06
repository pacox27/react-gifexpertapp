import React from 'react';
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

//en los inputs hay que darles siempre un onChange

const GifGrid = ({ category }) => {
    const {data:images,loading} = useFetchGifs(category);

    //const [images,setImages] = useState([]);

    return(
        <>
        <h3>{ category }</h3> 

        { loading && <p>Loading</p> }

        {
            <div className="card-grid">
                {
                    images.map( ( img ,i) => {
                        return <GifGridItem key={img.id} {...img} />
                    })
                }
            </div>
        }
        </>
    );
}

export default GifGrid;