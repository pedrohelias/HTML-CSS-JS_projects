function soma(){

    //Adquirir os dados
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;
    var res = document.getElementById("result");

    
    //tratar os dados
    num1 = parseInt(num1); 
    num2 = parseInt(num2);

    //executar o proposto
    res.value= num1+num2;
  

}

function subtrai(){

     //Adquirir os dados
     var num1 = document.getElementById("n1").value;
     var num2 = document.getElementById("n2").value;
     var res = document.getElementById("result");
 
     
     //tratar os dados
     num1 = parseInt(num1); 
     num2 = parseInt(num2);
 
     //executar o proposto
     res.value= num1-num2;


}

function multiplica(){

    //Adquirir os dados
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;
    var res = document.getElementById("result");

    
    //tratar os dados
    num1 = parseInt(num1); 
    num2 = parseInt(num2);

    //executar o proposto
    res.value= num1*num2;


}

function divide(){

    //Adquirir os dados
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;
    var res = document.getElementById("result");

    
    //tratar os dados
    num1 = parseInt(num1); 
    num2 = parseInt(num2);

    //executar o proposto
    res.value= num1/num2;


}
//Os numeros vêm do DOM como strings, então é necessário converte-los para inteiros com parseInt

function reinicia(){

    var num1= document.getElementById("n1");
    var num2 = document.getElementById("n2");
    var res = document.getElementById("result");

    num1.value = null;
    num2.value = null;
    res.value = null;


//Essa função pega os elementos e os retorna ao estado inicial, aplicando o null aos valores, inclusive ao resutlado final 

}