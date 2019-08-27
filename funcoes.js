function exe1(){
    // recupera os dados do usuário
    var nota1 = Number(document.getElementById("nota1").value);
    var nota2 = Number(document.getElementById("nota2").value);
    var nota3 = Number(document.getElementById("nota3").value);
    var nota4 = Number(document.getElementById("nota4").value);
    // processamento
    // calcula média
    var media = (nota1+nota2+nota3+nota4)/4
    // verifica aprovação
    if (media >= 7){
        alert("Aprovado com média " + media)
        console.log("Aprovado com média " + media)
    }
    else {
        alert("Reprovado com média " + media)
        console.log("Reprovado com média " + media)
    }
}
function exe2(){
    // recupera os dados do usuário
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);
    // processamento
    // calcula média
    var media = (n1+n2)/2
    // verifica aprovação
    if (media >= 7){
        alert("Aprovado com média " + media)
    }
    else if ((media >= 3) && (media < 7)){
            alert("Exame com média " + media)
    }
    else {
       alert("Reprovado com média " + media)
    }
}

function exe3(){
    // recupera os dados do usuário
    var nro1 = Number(document.getElementById("nro1").value);
    var nro2 = Number(document.getElementById("nro2").value);
     // verifica menor
    if (nro1 < nro2){
        alert("Menor " + nro1)
    }
    else if (nro2 < nro1){
            alert("Menor " + nro2)
    }
    else {
       alert("Não existe menor ")
    }
}

function exe4(){
    // recupera os dados do usuário
    var numero1 = Number(document.getElementById("numero1").value);
    var numero2 = Number(document.getElementById("numero2").value);
    var numero3 = Number(document.getElementById("numero3").value);
     // verifica menor
    if ((numero1 == numero2) && (numero2 == numero3)){
        alert("Não existe maior")
    }
    else if ((numero1 >= numero2) && (numero1 >= numero3)){
            alert("Maior " + numero1)
    }
    else if (numero2 >= numero3){
            alert("Maior " + numero2)
        }
        else {
            alert("Maior " + numero3)
        }
}
function exe5(){
    // recupera os dados do usuário
    var no1 = Number(document.getElementById("no1").value);
    var no2 = Number(document.getElementById("no2").value);
    var opcao = Number(document.getElementById("opcao").value);
    var resultado
    switch(opcao){
        case 1: resultado = (no1 + no2) / 2
            break // não entra no case de baixo
        case 2: if (no1 >= no2){
                    resultado = no1 - no2
                }
                else {
                    resultado = no2 - no1
                }
                break // não entra no case de baixo
        case 3:  resultado = no1 * no2
                break // não entra no case de baixo
        case 4: if (no2 != 0){
                    resultado = no1 / no2
                }
                else {
                    resultado = "Divisão por zero"
                }
                break // não entra no case de baixo
        default: resultado = "Opção inválida"
    }
    alert("Resultado " + resultado)
}

function exe7(){
    var salario = Number(document.getElementById("salario").value)
    if (salario < 500){
        var novo = salario + salario*30/100
        alert("Novo valor " + novo)
    }
    else {
        alert("Não tem direito a aumento, meus sentiementps")
    }
}