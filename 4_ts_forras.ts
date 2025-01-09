function osszesOszto(szam:number):number[]{
    var tomb:number[] = [];
    for (var i:number = 0; i <= szam ; i++){
        if( szam % i == 0){
            tomb.push(i);
        }
    }
    return tomb;
}

function parosDarab(szamtomb:number[]):number {
    
    var eredmeny:number = 0;

    for ( var i:number = 0; i < szamtomb.length; i++){
        if(szamtomb[i] % 2 == 0){
           eredmeny++; 
        }
    }
    return eredmeny;
}