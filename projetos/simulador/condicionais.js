
    function clicar(){
        //Parte de captura de valores
        let res= Number(document.getElementById("num").value);
        let resp= Number(document.getElementById('nump').value);
        //Parte responsavél pela logica
        let taxa = 0.05;
        let mult1 = res * taxa
        let multsoma1= (mult1 + res) / resp;

        document.getElementById('resultado').innerHTML=`O valor de sua parcela é: R$${multsoma1.toFixed(2)}</br> Em ${resp}x`
        
    }


