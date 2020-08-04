// este documento tiene la configuracion de nuestro webpack
const path =require('path');
const HtmlWebPackPlugin=require('html-webpack-plugin');
const loader = require('sass-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports={
    // la configuarcion de cada uno de los elementos que necesitamos
    // la configuracion del archivo de entrada
 entry:"./src/index.js",
//  los archivos quee se van a guardar cuando se empieze a compilar
 output:{
    //  el primer path es donde se va a guardar, el segundo path es instaciar el path que se declaro arriba y resolve(__dirname(nos va permitir  a detectar el directorio en el que nos encontramos ) 'dist'(y se le pasa el directorio en el cual se va aguardar los archivos)
     path:path.resolve(__dirname, 'dist'),
    //filename funciona para ponerle un nombre a nuestro archivo principal  
     filename:"bundle.js"

 },
//  resolve hace es resolver las extenciones de nuestro proyecto en este caso es js y jsx
 resolve:{
    extensions:['.jsx','.js']
 },
//  son cargadores o modulos con las reglas necesarias para el proyecto, para que el webpack nos permita manipular el css o las extenciones que se le indica 
module:{
    rules:[
        {
// Es importante recordar que al definir reglas en la configuración de su paquete web, las está definiendo debajo module.rulesy no rules. Para su beneficio, webpack le advertirá si esto se hace incorrectamente.
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use:{
            // la linea de abajo funciona para: Webpack se encargue de usar Babel para transformar todo nuestro código JS y JSX a JS que todos los navegadores entiendan
            loader:"babel-loader"
        }
    },
    //crear otra regla para trabajar con nuestros archivos html
    {
        
        test:/\.html$/,
        use:[
            {
                // Para inyectar el código dinámico que genera webpack en los archivos HTML    
                // necesita 2 dependencias : html-webpack-plugin y html-loader.
            loader:'html-loader'
        }
         ]
    },
    {
        // se encarga de identificar los css o los sss ,video12
        test:/\.(s*)css$/,
        use:[
            {
                loader:MiniCssExtractPlugin.loader
            },
            'css-loader',
            'sass-loader'
        ]
    },
    {
        test:/\.(png|gif|jpg)$/,
        use:[
            {
                'loader':'file-loader',
                //en las opciones va tener el nombre al momento de enviarse a produccion
                options:{
                    //la linea de abajo funciona para que se guarde en assets, que tenga un hash y que se respete la extension que yo tengo
                    name:'assets/[hash].[ext]'
                }

            }
        ]
    }
]
},  
// aqui se agrega los pugins que se va a necesitar y procesa y se genera una salida
    plugins:[
        //aqui se esta haciendo una referencia a HtmlWebPackPlugin y se pasa un objeto con la configuracion que necesitamos
        new HtmlWebPackPlugin({
            // en la linea de  abajo quiere decir que  nuestro documento principal esta dentro de la carpeta public 
            // y esa ruta es una ruta relativa no absoluta y hace es copiar  y crear el codigo html en la carpeta dist  y crea un html
            template:'./public/index.html',
            // en la linea de abjo hace es ejecutar el index.html que esta en la carpeta publicy no es necesario colocarlo
            filename:'./index.html'
        }),
        new MiniCssExtractPlugin({//video12
            // para assets se tiene que crear la  carpeta en src  y va contener los recursos de estilos 
            filename:'assets/[name].css'
        })
    ]
};