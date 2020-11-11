var titulo = document.querySelector(".titulo");
 
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente"); // querySelector seleciona somente um elemento, mas acrescentando All no final, seleciona todas as classes paciente 
//e armazena em array na variavel PACIENTES.

for(var i = 0 ; i < pacientes.length; i ++){ //length mostra a quantidade de elementos no array

    var paciente = pacientes[i];

    var pesos = paciente.querySelector(".info-peso").textContent;

    var alturas = paciente.querySelector(".info-altura").textContent;

    var imc = pesos / (alturas * alturas);

    var tdImc = paciente.querySelector(".info-imc");

    tdImc.textContent = imc.toFixed(2); //toFixed é a quantidade de casa a serem expostas após a virgula

    if(pesos <= 0 || pesos >= 1000){
        console.log("peso inválido!");
        tdImc.textContent = "peso inválido!";
        paciente.classList.add("paciente-invalido"); //adicionando clase para ser alterado o estilo NO CSS
    }
    if(alturas <= 0 || alturas >= 3){
        console.log("altura inválida!");
        tdImc.textContent = "altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

}

var botaoAdd = document.querySelector("#adicionar-paciente");

botaoAdd.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.querySelector("#form");

    var In = [
        form.nome.value, 
        form.peso.value ,  
        form.altura.value, 
        form.gordura.value, 
        (form.peso.value / (form.altura.value * form.altura.value)).toFixed(2)
    ]
    
    var pacienteTr = document.createElement("tr");

    pacienteTr.classList.add("paciente");

    var tabela = document.querySelector('#tabela-pacientes');
    
    In.forEach((variavel) => {
        var nomeTd = document.createElement("td");
        //nomeTd.classList.add("info-"+${form.name));
        nomeTd.textContent = variavel; 
        pacienteTr.appendChild(nomeTd);
    })

    tabela.appendChild(pacienteTr);
});