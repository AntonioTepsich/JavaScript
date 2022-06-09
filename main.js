let ingresa= prompt('Ingrese actividad: ');
let cantidad=0;
let texto='';
let final='';
while ((ingresa!='esc') && (ingresa!='ESC') && (ingresa!='Esc') && (ingresa!='')){
    cantidad+=1;
    texto+= `- ${ingresa} \n`;
    ingresa= prompt('Ingrese otra actividad por hacer (ingresando esc se terminara): ');
}
if (cantidad==0){
    final=`HOY NO TENES ACTIVIDADES POR HACER`;
} else {
    final=`HOY TENES QUE HACER ${cantidad} ACTIVIDADES:\n`+texto;
}
alert(`${final}`);  