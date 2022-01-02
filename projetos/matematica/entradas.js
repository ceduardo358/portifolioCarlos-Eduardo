function clicar(){
        var n1 =Number( document.getElementById("v1").value);
        var n2 =Number( document.getElementById("v2").value);
        var esc= document.getElementById("opt").value;   

if(esc == 'soma'){
    var res= n1+ n2;
    document.getElementById("resultado").innerHTML="O resultado da soma é: " + res;

} else if(esc == 'sub'){
    var res1 = n1 - n2;
    document.getElementById("resultado").innerHTML= "O resultado da subtração é: " + res1;

} else if(esc == 'mult'){
    var res2 = n1 * n2;
    document.getElementById("resultado").innerHTML= "O resultado da multiplicação é: " + res2;

} else if(esc == 'divi'){
    var res3 = n1 / n2;
    document.getElementById("resultado").innerHTML= "O resultado da divisão é: " + res3;
}

};