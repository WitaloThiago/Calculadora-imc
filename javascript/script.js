function clicar(){

    let altura = Number(document.getElementById("altura").value)
    let peso = Number(document.getElementById("peso").value)

    if(altura){

    var calc = altura * altura

    }
    else{

    document.getElementById("altura").innerHTML = alert("Coloque sua altura")

    }

    if(peso){

        var resul = peso / calc


    }
    else{

        document.getElementById("peso").innerHTML = alert("Coloque seu peso")

    }


    if(resul <= 18.5){

        document.getElementById("resultado").innerHTML = "Seu IMC é " + resul.toFixed(2) + " | Excesso de Magreza"

    }

    else if(resul < 25 ){

        document.getElementById("resultado").innerHTML = "Seu IMC é " + resul.toFixed(2) + " | Peso Normal"


    }

    else if(resul < 30 ){

        document.getElementById("resultado").innerHTML = "Seu IMC é " + resul.toFixed(2) + " | Excesso de Peso"


    }
    else if(resul < 35 ){

        document.getElementById("resultado").innerHTML = "Seu IMC é " + resul.toFixed(2) + " | Obesidade (Grau I)"


    }
    else if(resul < 40 ){

        document.getElementById("resultado").innerHTML = "Seu IMC é " + resul.toFixed(2) + " | Obesidade (Grau II)"


    }
    else if(resul > 40 ){

        document.getElementById("resultado").innerHTML = "Seu IMC é " + resul.toFixed(2) + " | Obesidade (Grau III)"


    }
}