/**
 * @description Clase principal de la aplicacion
 * @file app.js
 * @license GPL3 
 * @author Manuel Solís Gómez(masogo008@gmail.com)
 */
'use strict'
/**
 * Clase encargada de controlar los efectos de la pagina web
 */
class App
{
    constructor()
    {
        this.vista = new Vista();
        this.modelo = new Modelo();
        window.onload = this.iniciar.bind(this);
    }
    iniciar()
    {
        document.getElementsByClassName('desl')[0].onclick = this.moverIzq.bind(this);
        document.getElementsByClassName('desl')[1].onclick = this.moverDer.bind(this);

        this.vista.centrarElemento(document.getElementsByTagName('header')[0], document.getElementsByTagName('h1')[0]);
        this.vista.centrarVertical(document.getElementById('slider'), document.getElementsByClassName('desl')[0]);
        this.vista.centrarVertical(document.getElementById('slider'), document.getElementsByClassName('desl')[1]);
        this.vista.copiaProporcion(document.getElementsByTagName('video')[0], document.getElementsByTagName('iframe')[0]);
    }
    moverDer()
    {
        this.vista.slider(true,this.modelo.fondos);
    }
    moverIzq()
    {
        this.vista.slider(false,this.modelo.fondos);
    }
}
/**
 * Clase encargada de la parte visual del programa
 */
class Vista
{
    /**
     * Constructor encargado de colocar los atributos necesarios de la vista
     */
    constructor()
    {
        this.indiceFondos = 0;
    }
    /**
     * Metodo encargado de centrar vertical y horizontalemente un elemento en su contenedor
     * 
     * @param {elementoHTML} contenedor Elemento que contiene al alemento a centrar
     * @param {elementoHTML} elemento Elemento a centrar
     */
    centrarElemento(contenedor, elemento)
    {
        elemento.style.top = (contenedor.clientHeight/2)-(elemento.clientHeight/2) + 'px'; 
        elemento.style.left = (contenedor.clientWidth/2)-(elemento.clientWidth/2)  + 'px';
    }
    /**
     * Metodo encargado de centrar vertical un elemento en su contenedor
     * 
     * @param {elementoHTML} contenedor Elemento que contiene al alemento a centrar
     * @param {elementoHTML} elemento Elemento a centrar
     */
    centrarVertical(contenedor, elemento)
    {
        elemento.style.top = (contenedor.clientHeight/2)-(elemento.clientHeight/2) + 'px'; 
    }
    /**
     * Metodo encargado de copiar las proporciones de un elemento a otro elemento
     * 
     * @param {elementoHTML} elementoCopia Elemento del cual copiamos las proporciones
     * @param {elementoHTML} elementoDestino Elemento del cual destinamos las proporciones
     */
    copiaProporcion(elementoCopia, elementoDestino)
    {
        elementoDestino.style.width = elementoCopia.clientWidth+'px';
        elementoDestino.style.height = elementoCopia.clientHeight+'px';
    }
    /**
     * Metodo destinado al cambio de las imagenes en la direccion puesta en el slider
     * @param {boolean} moverDer True si buscas que se desplace para la derecha, si es False es la izquierda
     * @param {array} fondos Array que contiene el nombre ordenado de cada postal
     */
    slider(moverDer, fondos)
    {
        let contador = 0;
        let contadorDos = 0;
        if (moverDer) 
        {
            contadorDos = 0;
            this.indiceFondos += 1;
            if (this.indiceFondos > 9) 
            {
                this.indiceFondos = 0;
            }
        }
        else
        {
            contadorDos = 9;
            this.indiceFondos -= 1;
            if (this.indiceFondos < 0) 
            {
                this.indiceFondos = 9;
            }
        }
        while (contador<5) 
        {
            if (moverDer) 
            {
                if (this.indiceFondos+contador > 9) 
                {
                    console.log(contadorDos);
                    document.getElementById('fondos').getElementsByTagName('img')[contador].setAttribute('src', 'img/'+fondos[(0+contadorDos)]);
                    contadorDos = contadorDos + 1;
                }
                else
                {
                    document.getElementById('fondos').getElementsByTagName('img')[contador].setAttribute('src', 'img/'+fondos[(this.indiceFondos+contador)]);
                }
            }
            else
            {
                if (this.indiceFondos-contador < 0) 
                {
                    console.log(contadorDos);
                    document.getElementById('fondos').getElementsByTagName('img')[contador].setAttribute('src', 'img/'+fondos[(0+contadorDos)]);
                    contadorDos = contadorDos - 1;
                }
                else
                {
                    document.getElementById('fondos').getElementsByTagName('img')[contador].setAttribute('src', 'img/'+fondos[(this.indiceFondos-contador)]);
                }
            }
            contador += 1;
        }
    }
}
/**
 * Clase encargada de los datos del programa 
 */
class Modelo
{
    constructor()
    {
        this.fondos = [];
        this.arrayFondos();
    }
    /**
     * Metodo encargado de crear el array de los fondos de las postales
     */
    arrayFondos()
    {
        this.fondos = 
        [
            'fondo1.png',
            'fondo2.png',
            'fondo3.png',
            'fondo4.png',
            'fondo5.png',
            'fondo6.png',
            'fondo7.png',
            'fondo8.png',
            'fondo9.png',
            'fondo10.gif'
        ];
    }
}

let aplicacion = new App();