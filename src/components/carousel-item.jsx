import React from 'react';
import PropType from 'prop-types';//es para verificas las propiedades
import '../assets/style/components/CarouselItem.scss';
import playIcon from '../assets/style/static/play-icon.png';
import plusIcon from '../assets/style/static/plus-icon.png';
// {ver}
const CarouselItem=({cover,title,year,contentRating,duration})=>(
    
    <div className="carousel-item">
        
        <img className="carousel-item__img" src={cover} alt={title} />
        <div className="carousel-item__details">
            <div>
                <img className="carousel-item__details--img" src={playIcon} alt="Play Icon" /> 
                <img className="carousel-item__details--img" src={plusIcon} alt="Plus Icon" /> 
            </div>
            <p className="carousel-item__details--title">Título descriptivo</p>
            <p className="carousel-item__details--subtitle">2019 16+ 114 minutos
            {`${year} ${contentRating} ${duration}`}
            </p>
        </div>
    </div>

)
//el proptype funciona para verificar el tipo de dato de cada propiedad
// aqui se define que tipos de datos se debe recibir
// CarouselItem.PropType={ si llega ver un error hay que poner la P por p
CarouselItem.PropType={
cover:PropType.string,// para esto se necesita instalar el paquete poptype y se le indica que va se un string para la propiedad
title:PropType.string,
year:PropType.number,
contentRating:PropType.string,
duration:PropType.string,
}

export default CarouselItem;