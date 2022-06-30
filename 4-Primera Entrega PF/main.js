const numeros = [1,2,3,4,5,6,7,8,9,0];
const simbolos = ['@','$','&','#','%'];

const codigos = Array.from(Array(26)).map((_, i)=> i + 97);   //creo numeros para despues pasarlos a letras

const letrasMin=codigos.map(code => String.fromCharCode(code));  //paso a letras minusculas el codigo anterior

const letrasMay=letrasMin.map(letra => letra.toUpperCase());  //paso a letras mayuscula las letras minusculas

let largo = 0;
let tieneNum ='';
let tieneSim ='';
let tieneMay =''; 
let tieneMin ='';

do {
    largo = Number(prompt('GENERADOR DE CONTRASEÑA\nCantidad de caracteres (ej: 12): '));
} while (isNaN(largo)!=false);


do {
    tieneNum = prompt('GENERADOR DE CONTRASEÑA\nTiene numeros (SI o NO): ').toLowerCase();
} while (tieneNum!='si' && tieneNum!='no');

do {
    tieneSim = prompt('GENERADOR DE CONTRASEÑA\nTiene simbolos (SI o NO): ').toLowerCase();
} while (tieneSim!='si' && tieneSim!='no');


do {
    tieneMay = prompt('GENERADOR DE CONTRASEÑA\nTiene letras mayusculas (SI o NO): ').toLowerCase();
} while (tieneMay!='si' && tieneMay!='no');


do {
    tieneMin = prompt('GENERADOR DE CONTRASEÑA\nTiene letras minusculas (SI o NO): ').toLowerCase();
} while (tieneMin!='si' && tieneMin!='no');

alert(`GENERADOR DE CONTRASEÑA\nSu contraseña generada es: "${generador(largo, tieneNum, tieneSim, tieneMay, tieneMin)}"`)


function generador(largo, tieneNum, tieneSim, tieneMay, tieneMin) {
    let admisibles= [];
    let contraseña='';
    if (tieneNum=='si' ){
        admisibles=admisibles.concat(numeros);
    }
    if (tieneSim=='si' ){
        admisibles=admisibles.concat(simbolos);
    }
    if (tieneMay=='si' ){
        admisibles=admisibles.concat(letrasMay);
    }
    if (tieneMin=='si' ){
        admisibles=admisibles.concat(letrasMin);
    }
    

    if(admisibles.length===0){
        return ''
    }

    for (let i = 0; i < largo; i++) {
        let randomAdd=Math.floor(Math.random()*admisibles.length);
        contraseña+=admisibles[randomAdd];
    }

    return contraseña
}



