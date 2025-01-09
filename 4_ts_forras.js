function osszesOszto(szam) {
    var tomb = [];
    for (var i = 0; i <= szam; i++) {
        if (szam % i == 0) {
            tomb.push(i);
        }
    }
    return tomb;
}
function parosDarab(szamtomb) {
    var eredmeny = 0;
    for (var i = 0; i < szamtomb.length; i++) {
        if (szamtomb[i] % 2 == 0) {
            eredmeny++;
        }
    }
    return eredmeny;
}
