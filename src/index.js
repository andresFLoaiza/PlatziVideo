// a este archivo le dicen el punto de entrada ya que es el primer archivo que va ser detectado y aqui se va a trabajar con toda la configuracion de react
import React from 'react';//esto es lo primero que se hace importar a react
import ReactDom from 'react-dom'; //es una libreria, lo que hace es empujar todo el react hacia el navegador 
// import HelloWorld from './components/HelloWorld';
// la linea de abajo Header debe estar en mayusculas  para que no me de error, el componente puede ser exportado en minuscula
import App from './container/App';
// render() recibe dos parametros: el componente y el otro donde va a empujar ese componente
// ReactDom.render(<HelloWorld />,document.getElementById(app))
// aqui se cambio el app a 'app', el app hace referencia al id que esta en el html de la carpet de public
var Icon = ()=>(
    <div className='icon-container'>
        <p>hola en el dia de hoy estamos modificando el archivo</p>
        <ul>
            <li>home</li>
            <li>productos</li>
            <li>contacto</li>
        </ul>   
      </div>)
ReactDom.render(<App/>,document.getElementById('app'));