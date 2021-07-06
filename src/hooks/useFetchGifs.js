import {useState,useEffect} from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

    const [state,setState] = useState({
        data:[],
        loading:true
    });

    useEffect( () => {

        getGifs( category )
            .then( imgs => {
                console.log(imgs);
                setTimeout(() => {
                    setState({
                        data: imgs,
                        loading: false
                    });
                },2000);
                
            })

    },[category])//el segundo arreglo es una lista de dependencias

    return state;

}