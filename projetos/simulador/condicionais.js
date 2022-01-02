
    function clicar(){
        //Parte de captura de valores
        var res= Number(document.getElementById('num').value);
        var resp= Number(document.getElementById('nump').value);
        //Parte responsavél pela logica
        var taxa = [0.05, 0.1]
        if(resp == 1){
            var mult1 = res * taxa[0]
            var multsoma1= (mult1 + res) 
            document.getElementById('resultado').innerHTML=`O valor de sua parcela é: R$${multsoma1}</br> Em apenas 1x`

         }else if(resp == 2){
            var mult2 = res * taxa[1]
            var multsoma2= (mult2 + res) / 2
            document.getElementById('resultado').innerHTML=`O valor de sua parcela é: R$${multsoma2}</br> Em 2x` 

        }if(resp == 3){
            var mult3 = res * 0.15
            var multsoma3= (mult3 + res) / 2
            document.getElementById('resultado').innerHTML=`O valor de sua parcela é: R$${multsoma3}</br> Em 3x`

        }else if(resp == 4){
            var mult4 = res * 0.2
            var multsoma4= (mult4 + res) / 2
            document.getElementById('resultado').innerHTML=`O valor de sua parcela é: R$${multsoma4}</br> Em 4x`

        }if(resp == 5){
            var mult5 = res * 0.25
            var multsoma5= (mult5 + res) / 2
            document.getElementById('resultado').innerHTML=`O valor de sua parcela é: R$${multsoma5}</br> Em 5x`

         }else if(resp == 6){
            var mult6 = res * 0.3
            var multsoma6= (mult6 + res) / 2
            document.getElementById('resultado').innerHTML=`O valor de sua parcela é:<strong> R$${multsoma6}</strong></br> Em 6x`
        } else if(resp >= 7){
            
            document.getElementById('resultado').innerHTML= "Não parcelamos em mais de 6x"
        }
    }


