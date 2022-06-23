
let person='';
let outlay=0;
let valor='si';
let listNueva=[];
let final=[];
let list=[];
let texto='';
let a='';
let b='';
let sumando=0;
let suma=0;

const project = prompt('Ingrese el nombre del proyecto (ej: "viaje  parana"): ').toUpperCase();
alert(DivGasto(project));

function DivGasto(project){
    agregar();
    while(valor!='no'){
        let texto2='';
        for(let x=0; x<(list.length); x++){
            texto2+=(`${list[x].person} gasto: $${list[x].outlay}\n`)
        }
        sumando=sumar(list)
        valor=prompt(`${project} ----> $${sumando}\n${texto2}\nDesea continuar? (SI/NO/MODIFICAR) `).toLowerCase();
        if (valor=='no'){
            return `${project} ----> $${sumando}\n${divisor(list, sumando)}`;
        } else if (valor=='modificar'){
                list=modif(list)
        } else if (valor=='si'){
            agregar();
        }
    }
}

function agregar(){                        //AQUI SE AGREGAN LAS PERSONAS
    do {
        person=prompt(`${project}\nNombre de la persona (ej: "antonio"):\nPara finalizar aprete alguna tecla que no sean letras y aceptar`).toLowerCase();
        if (esLetra(person)==true){
            outlay=Number(prompt(`${project}\n${person} gasto (ej: "2000"):\n(ingrese solo numeros) `));
            list.push({person:person, outlay:outlay});
        }
    } while (esLetra(person)==true);
    return list
}


function modif(list){          //AQUI SE MODIFICAN LOS VALORES DE LAS PERSONAS INGRESADAS
    let texto3='';
    contador=0;
    for(let k=0; k<(list.length); k++){
        texto3+=(`${list[k].person}\n`)
    }
    let pal= prompt(`De quien quiere modificar el gasto?\n${texto3}`).toLowerCase();
    do {
        listNueva=[];
        for(let u=0; u<(list.length); u++){
            a=list[u].person
            b=list[u].outlay
            if(pal==a){
                b=Number(prompt(`${project}\n${a} gasto:\n(ingrese solo numeros)`));
                listNueva.push({person:a, outlay:b});
                contador=1
            } else{
                listNueva.push({person:a, outlay:b});
            }
        }
        if (contador!=1){
            pal= prompt(`No esta la persona que dice. De quien quiere modificar el gasto?\n${texto3}`).toLowerCase();
        }
    } while (contador!=1);

    return listNueva
}



function sumar(list){              //suma los sub totales   
    suma=0;        
    let total=list.map(x=>x.outlay);
    for(let i=0; i<(total.length); i++){
        suma+=Number(total[i]);
        
    }
    return suma
}

function esLetra(palabra){                   //AQUI SE DIRA SI SON LETRAS O NO 
    let letra='';
    let contador=0;
    for (let i=0; i<(palabra.length); i++) {
        letra=palabra[i];
        letra=letra.charCodeAt()
        if ((letra > 96) && (letra < 123)) {                   //PUSE ESTE CODIGO PORQUE SE QUE TODAS LAS LETRAS SON MAYUSCULA Y SU CODIGO ASCII ESTA EN ORDEN 
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

function divisor(list, sumando){                          //AQUI SE HARA LA DIVISION DE CUANTO TIENE QUE PONER CADA UNO
    for(let i=0; i<(list.length); i++){
        a=list[i].person;
        b=Number(list[i].outlay);
        final.push({person:a, outlay:((sumando/(list.length)-b))})
    }
    for(let x=0; x<(final.length); x++){
        a=final[x].person;
        b=Number(final[x].outlay);
        if(b>0){
            texto+=(`${a} debe: $${b}\n`)
        } else if (b<0) {
            b=-b;
            texto+=(`A ${a} le deben: $${b}\n`)
        } else{
            texto+=(`${a} no debe nada\n`)
        }
    }
    return texto
}






