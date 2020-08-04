

//el nombre de este archivo  se debe llamar asi por motivo standar es una forma de identificar que es un react hooks 
//esto es un cuustum hooks
import {useState,useEffect} from 'react';
const useInitialState=(API)=>{
    // video es la veriable que va contener el estado, setvideo es la veriable que nos va a permitir actulizar el estado
    // useState recibe elementos para inicializar el estado puede ser una variable, un booleano o un objeto y este mismo se lo asigna a video para que ponga el estado actual
    const [videos,setvideo]=useState({mylist: [], trends: [], originals: []});
    //useEffect va traer la informacion de la api para pasar le la informacion a setvideos la cual se encarga de acutlizar la informacion  a la variable videos la que esta en la linea 3
    useEffect(()=>{
        fetch(API)
        .then(response=>response.json())
        .then(data=>setvideo(data))
    },[])
    return videos;
}
export default useInitialState;