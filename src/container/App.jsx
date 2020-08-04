// esta scrip va ser el componente principal
// {useState(va manejar el estado),useEffect(va hacer las trasiones o escuchar algun cambioi de estado que se valla a realizar)} son dos funciones
import React,{useState,useEffect} from 'react';
// le pueden o no  usar las extensiones 
// Headeer no es necesario que se llame igual a como esta en la funcion y  La primera letra de ser en mayuscula
import Hdeer from '../components/Header';
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/carousel-item'
import Search from '../components/search'// los componentes no es necesesario colocar las extensiones, solamente  a los estilos de sacss
import Footer from '../components/Footer'
import UseInitialState from '../hooks/useInitialState' //estamos separando la logica de react hooks del componente 
import '../assets/style/App.scss' //aqui va un componente universal  por eso se puede importar en esta parte 
const API ='http://localhost:3000/initalState'
const App=()=>{//cuando no tiene los {} se le esta indicando que tiene un returno explicito
// video es la veriable que va contener el estado, setvideo es la veriable que nos va a permitir actulizar el estado
// useState recibe elementos para inicializar el estado puede ser una variable, un booleano o un objeto y este mismo se lo asigna a video para que ponga el estado actual
// const [videos,setvideo]=useState({mylist: [], trends: [], originals: []});
//useEffect va traer la informacion de la api para pasar le la informacion a setvideos la cual se encarga de acutlizar la informacion  a la variable videos la que esta en la linea 3
// useEffect(()=>{
//     fetch('http://localhost:3000/initalState')
//     .then(response=>response.json())
//     .then(data=>setvideo(data))
// },[])
//console.log(videos)//nos muestra un objeto con los datos de la api que integramos en el json server


const initialState=UseInitialState(API)
return (
    
    <div className="App">
        
        <Hdeer />   
        <Search />
        
        {initialState.mylist.length > 0 &&//si es mayor que 0 =  aque no se muestre el bloque de codigo que biene a continuacion videos.mylist.length > 0 &&
            <Categories title="Mi lista" >
                <Carousel> 
                    <CarouselItem />
                </Carousel>
            </Categories>
        }
        
        <Categories title="tendencias">
            <Carousel> 
            
                { initialState.trends.map(item=>//videos.trends.map(item=>
                    
                    <CarouselItem key={item.id}{...item}/>
                )}
            </Carousel>
        </Categories>
        <Categories title="lo mas vendido">
            <Carousel> 
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
            </Carousel>
        </Categories>
        <Footer />
    </div>

)}
export default App;