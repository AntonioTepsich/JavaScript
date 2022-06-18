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

repite('H','A-C-H','W-J-M')