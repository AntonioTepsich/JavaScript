const button = document.getElementById('button');
const body = document.querySelector('body');
const colorNumber = document.querySelector('.color-number');
const colorCard = document.querySelector('.color-card');
const container = document.querySelector('.container');
const title = document.querySelector('.title');


if (localStorage.getItem('actual')!= null){       //Sirve para que cada vez que se reinicie la pagina, no se borre el ultimo color
    let guardado= JSON.parse(localStorage.getItem('actual'))
    let newColo=guardado[0].newColor;
    let text=guardado[0].texto;


    colorNumber.innerHTML=newColo;

    title.style.color= newColo;
    colorNumber.style.color= newColo;
    button.style.backgroundColor= newColo;
    body.style.backgroundColor = newColo;
    colorCard.style.backgroundColor=newColo;


    if (text==='light'){
        container.style.background= 'rgba(7, 15, 23, 0.65)';
        button.style.color='rgba(7, 15, 23, 0.65)';
    } else {
        container.style.background= 'rgba(255, 255, 255, 0.8)';
        button.style.color='rgba(255, 255, 255, 0.8)';
    }
}




function generadorColor() {          //Aca genero el Color en formato RGB 

    const r = Math.floor(Math.random()*255);   
    const g = Math.floor(Math.random()*255);   //como Math.random genera un numero entre 0 y 1, quiero que mis numeros vayan de 0 a 255 por RGB y redondeo con Math.floor para numero entero
    const b = Math.floor(Math.random()*255);  
    
    const rgb = {r: r, g: g, b: b};      //Exporto en forma de objeto

    return rgb;
};

function rgbLetras(rgb) {            //Aca paso el objeto de tal manera que pueda ser leido en CSS 

    let claves = Object.values(rgb)
    let a = claves[0];
    let b = claves[1];
    let c = claves[2];
    
    const rgbColor = `rgb(${a}, ${b}, ${c})`;

    return rgbColor
}



function setBackground() {         //Aca cambio los colores de la pagina

    const color = generadorColor();
    const newColor = rgbLetras(color);
    const texto = cerebro(color);
    
    save(color,newColor,texto)

}

function save(color,newColor,texto) {  //Para que se guarden los datos en el local storage 
    let actual = [];
    actual.push({color:color, newColor:newColor, texto:texto});

    localStorage.setItem('actual', JSON.stringify(actual));

}


 

let actual = localStorage.getItem('actual')

button.addEventListener('click',function(){   //Ejecutamos cada vez que apretamos el boton
    setBackground()
    let guardado= JSON.parse(localStorage.getItem('actual'))
    let newColo=guardado[0].newColor;
    let text=guardado[0].texto;


    colorNumber.innerHTML=newColo;

    title.style.color= newColo;
    colorNumber.style.color= newColo;
    button.style.backgroundColor= newColo;
    body.style.backgroundColor = newColo;
    colorCard.style.backgroundColor=newColo;


    if (text==='light'){
        container.style.background= 'rgba(7, 15, 23, 0.65)';
        button.style.color='rgba(7, 15, 23, 0.65)';
    } else {
        container.style.background= 'rgba(255, 255, 255, 0.8)';
        button.style.color='rgba(255, 255, 255, 0.8)';
    }
})     



//---------------------MACHINE LEARNING-----------------------------------------

function colorCerebro(x) {                 //Aca paso los valores rgb que van de 0 a 255 y los pongo de 0 a 1 porque la libreria brain.js solo entiende con esos valores

    let claves = Object.values(x)
    let a = claves[0]/255;
    let b = claves[1]/255;
    let c = claves[2]/255;
    const valor = {r: a, g: b, b: c}
    return valor
}


function cerebro(color) {               //Aca la funcion me va a decir si el color es claro u oscuro

    let colorCer =colorCerebro(color);
    const network = new brain.NeuralNetwork();
    
    network.train([                                                     //Entrenamos a la maquina, mientras mas ejemplos le demos, mejores van a ser los resultados
        { input: { r: 0.62, g: 0.72, b: 0.88 }, output: { light: 1 } },
        { input: { r: 0.1, g: 0.84, b: 0.72 }, output: { light: 1 } },
        { input: { r: 0.33, g: 0.24, b: 0.29 }, output: { dark: 1 } },
        { input: { r: 0.74, g: 0.78, b: 0.86 }, output: { light: 1 } },
        { input: { r: 0.31, g: 0.35, b: 0.41 }, output: { dark: 1 } },
        { input: {r: 0.784, g: 0.255, b: 0.329}, output: { dark: 1 } },
        { input: {r: 1, g: 0.99, b: 0}, output: { light: 1 } },
        { input: {r: 1, g: 0.42, b: 0.52}, output: { dark: 1 } },
    ])
    


    const result = brain.likely(colorCer, network);
    return result;
    
}




