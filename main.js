
// *CPF*

function ValidaCPF() { //testa se digitos estão entre 0 e 9 de 3 em 3 números com traço antes dos últimos 2 dígitos
    var cpf = document.querySelector('#RegraValida');
    var RegraValida = cpf.value;
    var cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;
    if (cpfValido.test(RegraValida) == true) {
        cpf.style.backgroundColor = "#cdf8ff"
    } else {
        cpf.style.backgroundColor = "rgb(255, 230, 230)"
    }
}

function fMasc(objeto, mascara) {
    obj = objeto
    masc = mascara
    setTimeout("fMascEx()", 1)
}

function fMascEx() {
    obj.value = masc(obj.value)
}

function mCPF(cpf) {
    cpf = cpf.replace(/\D/g, "") //substituir digitos que não são de 0 a 9 por ""
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2") // depois de 3 digitos substituir o 4o por "."
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2") 
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2") // depois da terceira série de 3 números substituir o 10o por "-"
    return cpf
}


// *RG*

function mascara(t, mask) { //N sei se entendi mas parece que puxa this.value da mascara no keydown. Se substring de texto (mask.substring(i)) 0, 1 (primeiro digito) diferente de saída ("") retorna valor digitado com a máscara
    var i = t.value.length;
    var saida = mask.substring(1, 0) // Ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/substr
    var texto = mask.substring(i)
    if (texto.substring(0, 1) != saida) {
        t.value += texto.substring(0, 1);
    }
}

/*  */

function validarrg() { 
    var rg = document.querySelector('#rgvalido');

    if (rg.value.length == 12) {
        rg.style.backgroundColor ="#cdf8ff";
    } else {
        rg.style.backgroundColor = "rgb(255, 230, 230)";
    }
}

/*  */




/* CEP */


function getDadosEnderecoCEP(cep) {

    let xhr = new XMLHttpRequest()

    let url = 'https://viacep.com.br/ws/' + cep + '/json/unicode/'

    xhr.open('GET', url, true)

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                let dadosJSONText = xhr.responseText
                let dadosJSONObj = JSON.parse(dadosJSONText)

                document.getElementById('rua').value = dadosJSONObj.logradouro
                document.getElementById('bairro').value = dadosJSONObj.bairro
                document.getElementById('cidade').value = dadosJSONObj.localidade
                document.getElementById('estado').value = dadosJSONObj.uf
            }
        }
    }
    xhr.send();

}

/*  */

function validarcep() {
    var cep = document.getElementById("cepvalido");
    var rua = document.getElementById("rua")
    var bairro = document.getElementById("bairro")
    var cidade = document.getElementById("cidade")
    var estado = document.getElementById("estado")


    if (cep.value.length == 9) {
        cep.style.backgroundColor = "#cdf8ff";
        rua.style.backgroundColor= "#cdf8ff";
        bairro.style.backgroundColor= "#cdf8ff";
        cidade.style.backgroundColor= "#cdf8ff";
        estado.style.backgroundColor= "#cdf8ff";
        
    } else {
        cep.style.backgroundColor = "rgb(255, 230, 230)";
    }
}

function validaEnd() {
    var rua = document.querySelector('#rua')
    var cep = document.querySelector('#cepvalido')

    if (rua.value == "undefined") {
        alert("Cep inexistente. Por favor, preencha um CEP válido.")       
        cep.value = "";        
    }
}




// *complemento*

function fillComp() {
    var comp = document.querySelector('#comp');   

    if (comp.value == "") {    
        comp.value = "N/A"
        comp.style.backgroundColor = "#cdf8ff";  
    } else {
        comp.style.backgroundColor = "#cdf8ff";
    }

}
