let h='';
jugar=prompt('Desea jugar al ahorcado? (SI/NO): ').toUpperCase();                   //ARRANCA EL JUEGO
while(h!='NO'){
    while (jugar!='SI' && jugar!='NO'){
        jugar=prompt('Disculpe, no quedo claro.\nDesea jugar al ahorcado? (SI/NO): ').toUpperCase()
    }
    if (jugar=='SI'){
        juego();
    }else if (jugar=='NO') {
        break;
    } 
    jugar=prompt('Gracias por jugar\nDesea jugar otra vez? (SI/NO): ').toUpperCase();

}

alert('Gracias por jugar!!');


function juego (){                   //AQUI JUNTAMOS TODAS LAS FUNCIONES CREADAS
    let palabra = prompt('Ingrese una palabra (sin acentos, ni espacios): ').toUpperCase();
    let fallos=0;
    let aciertos=0;
    let letra='';
    let letraAcierta='';
    let letraErra='';

    while((esLetra(palabra)==false) || (palabra.length<3) ){                   //FUNCIONARA MIENTRAS LA PALABRA TENGA SOLO LETRAS Y MAS DE 3 PALABRAS
        if(esLetra(palabra)==false){
            palabra = prompt('no ingreso palabra con solo letras: ').toUpperCase();
        } else {
            palabra = prompt('ingrese palabra mayor o igual a 3 letras(con la palabra NO se sale): ').toUpperCase();
        }
    }
    letra=prompt(`La palabra tiene ${palabra.length} letras\nTienes ${5-fallos} vidas\nIngrese una letra: `).toUpperCase();

    while((fallos!=5) && (aciertos!=(palabra.length))){                   //FUNCIONARA HASTA QUE FALLE 5 VECES O ACIERTE LA PALABRA
        while(((esLetra(letra)==false) || (letra.length!=1) || (repite(letra,letraAcierta,letraErra)==true))){                   //FUNCIONARA MIENTRAS SI NO INGRESA UNA LETRA, MAS DE UNA LETRA O SI SE REPITE LA LETRA
            if (repite(letra,letraAcierta,letraErra)==true){
                letra=prompt(`ERROR.ingrese una letra distinta a (${letraAcierta+letraErra}): `).toUpperCase();
                // letra='A';
            } else {
                letra=prompt('ERROR.ingrese UNA letra: ').toUpperCase();
            }
        }
        if (validar(palabra, letra)==true){                   //AQUI SE VALIDA LA LETRA
            aciertos+=1;
            letraAcierta+=letra + '-';
        } else {
            fallos+=1;
            letraErra+=letra + '-';
        }

        if(aciertos==(palabra.length)){                   //AQUI SE DIRA SI SE TERMINA EL JUEGO
            break
        } else if (fallos==5){
            break
        }
        p=ordenar(palabra,letraAcierta)
        letra=prompt(`La palabra tiene ${palabra.length} letras\nTienes ${5-fallos} vidas\nVas ${fallos} fallos (${letraErra})\nVas ${aciertos} aciertos (${p})\ningrese una letra: \n`).toUpperCase();
    }

    if(aciertos==(palabra.length)){
        alert(`Felicitaciones adivinaste la palabra: ${palabra}`)
    } else{
        alert(`Perdiste, la palabra era: ${palabra}`)
    }
}


function ordenar(palabra,letraAcierta){                   //AQUI SE ORDENA LAS LETRAS QUE SE ACIERTEN
    let letra='';
    let palNueva='_'
    palNueva=palNueva.repeat(palabra.length)
    for (let i=0; i<(letraAcierta.length); i++) {                 
        letra=letraAcierta[i];
        if (esLetra(letra)){
            for(let x=0; x<(palabra.length); x++){
                if(palabra[x]==letra){
                    palNueva=palNueva.split('');
                    palNueva[x]=letra;
                    palNueva=palNueva.join('');
                }
            }
        }
    }
    return palNueva
}


function esLetra(palabra){                   //AQUI SE DIRA SI SON LETRAS O NO 
    let letra='';
    let contador=0;
    for (let i=0; i<(palabra.length); i++) {
        letra=palabra[i];
        letra=letra.charCodeAt()
        if ((letra > 64) && (letra < 91)) {                   //PUSE ESTE CODIGO PORQUE SE QUE TODAS LAS LETRAS SON MAYUSCULA Y SU CODIGO ASCII ESTA EN ORDEN 
            contador+=1;
        } else {
            break
        }
    }
    if (contador==palabra.length){
        return true;
    } else{
        return false;
    }
}

function validar(palabra, ingreso){                   //AQUI TE DIRA SI ACIERTA LA LETRA QUE DIJO CON LA RESPUESTA
    for (let i=0; i<(palabra.length); i++) {
        letra=palabra[i];
        if (ingreso==letra){
            return true;
        }
    }
    return false;
}

function repite(letra,letraAcierta,letraErra){                   //AQUI TE DIRA SI SE REPITE ALGUNA DE LAS LETRAS YA DICHAS
    let a=''
    letraAcierta=letraAcierta.split('');
    letraErra=letraErra.split('');
    a=letraAcierta.concat(letraErra);
    a=a.join('');
    for(let x=0; x<(a.length); x++){
        if(a[x]==letra){
            return true
        }
    }
    return false
}