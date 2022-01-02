
function calcular(){
//Pegando os valores do html
var alt= document.getElementById("altura").value;
var peso= document.getElementById("peso").value;

//Logica do calculo, 

var subtotal= alt * alt;
var total=parseFloat(peso/subtotal) 

//Logica das classificação do IMC que vai de <16 a >40

if(total <16){
    document.getElementById("txt").innerHTML="IMC = " + total.toFixed(2) + " Magreza grave!"
}else if(total >= 16 && total <=17  ){
    document.getElementById("txt").innerHTML="IMC = " + total.toFixed(2) + " Magreza moderada!"
}else if(total >=17 && total <=18.5){
    document.getElementById("txt").innerHTML="IMC = " + total.toFixed(2) + " Magreza leve!"
}else if(total >=18.5 && total <=25){
    document.getElementById("txt").innerHTML="IMC = " + total.toFixed(2) + " Saúdavél"
}else if(total >=25 && total <=30){
    document.getElementById("txt").innerHTML="IMC = " + total.toFixed(2) + " Sobrepeso"
}else if(total >=30 && total <=35){
    document.getElementById("txt").innerHTML="IMC = " + total.toFixed(2) + " Obesidade Grau I"
}else if(total >=35 && total <=40){
    document.getElementById("txt").innerHTML="IMC = " + total.toFixed(2) + " Obesidade Grau II (severa)"
}else if(total >=40){
    document.getElementById("txt").innerHTML="IMC = " + total.toFixed(2) + "Obesidade Grau III (mórbida)"  
}};   
//Logica de forçar o ponto do input da altura



