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


function fuggvenyhivasPalindrom(fv:()=> string):boolean{
    var szoveg:string = fv();
    szoveg = szoveg.toLowerCase();
    szoveg = szoveg.replaceAll(" ", "");
    
    var eredmeny:boolean = true;

        for ( var i:number = 0; i < szoveg.length; i++){
            if(szoveg[i] != szoveg[szoveg.length -1 -i]){
                eredmeny = false;
                break;
            }
        }
    return eredmeny;
}