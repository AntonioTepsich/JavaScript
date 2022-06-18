
function juego (){
    let palabra = prompt('Ingrese una palabra (sin acentos, ni espacios): ');
    let fallos=0;
    let aciertos=0;
    let letra='';
    let letraAcierta='';
    let letraErra='';

    palabra=palabra.toUpperCase();
    while((esLetra(palabra)==false) || (palabra.length<3) ){
        if(esLetra(palabra)==false){
            palabra = prompt('no ingreso palabra con solo letras: ').toUpperCase();
            // palabra = 'HOLA';
        } else {
            palabra = prompt('ingrese palabra mayor o igual a 3 letras(con la palabra NO se sale): ').toUpperCase();
        }
    }
    letra=prompt(`La palabra tiene ${palabra.length} letras\nTienes ${5-fallos} vidas\nIngrese una letra: `).toUpperCase();
    // letra='H';
    while((fallos!=5) && (aciertos!=(palabra.length))){
        while(((esLetra(letra)==false) || (letra.length!=1) || (repite(letra,letraAcierta,letraErra)==true))){
            if (repite(letra,letraAcierta,letraErra)==true){
                letra=prompt(`ERROR.ingrese una letra distinta a (${letraAcierta+letraErra}): `).toUpperCase();
                // letra='A';
            } else {
                letra=prompt('ERROR.ingrese UNA letra: ').toUpperCase();
            }
        }
        if (validar(palabra, letra)==true){
            aciertos+=1;
            letraAcierta+=letra + '-';
        } else {
            fallos+=1;
            letraErra+=letra + '-';
            // ordenar(palabra,letraAcierta)
        }

        if(aciertos==(palabra.length)){
            break
        } else if (fallos==5){
            break
        }
        p=ordenar(palabra,letraAcierta)
        letra=prompt(`La palabra tiene ${palabra.length} letras\nTienes ${5-fallos} vidas\nVas ${fallos} fallos (${letraErra})\nVas ${aciertos} aciertos (${p})\ningrese una letra: \n`).toUpperCase();
        // letra='H';
    }

    if(aciertos==(palabra.length)){
        alert(`Felicitaciones adivinaste la palabra: ${palabra}`)
    } else{
        alert(`Perdiste, la palabra era: ${palabra}`)
    }
}

juego()


function ordenar(palabra,letraAcierta){
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


function esLetra(palabra){
    let letra='';
    let contador=0;
    for (let i=0; i<(palabra.length); i++) {
        letra=palabra[i];
        letra=letra.charCodeAt()
        if ((letra > 64) && (letra < 91)) {
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

function validar(palabra, ingreso){
    for (let i=0; i<(palabra.length); i++) {
        letra=palabra[i];
        if (ingreso==letra){
            return true;
        }
    }
    return false;
}

function repite(letra,letraAcierta,letraErra){
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