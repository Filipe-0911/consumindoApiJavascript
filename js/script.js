var endereco = document.getElementById(`endereco`);
var bairro = document.getElementById(`bairro`);
var cidade = document.getElementById(`cidade`);
var estado = document.getElementById(`estado`);
var cep = document.getElementById('cep');

async function buscaEndereco(cep) {
    try {
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCepConvertida = await consultaCep.json();

        if (consultaCepConvertida.erro) {
            throw Error(`CEP não existente!`)
        }
        //console.log(consultaCepConvertida);
        return insereDadosHtml(consultaCepConvertida);

    } catch (erro) {
        console.log(erro);
    }
}

cep.addEventListener(`focusout`, () => buscaEndereco(cep.value));

function insereDadosHtml(enderecoCompleto) {
    endereco.value = enderecoCompleto.logradouro;
    bairro.value = enderecoCompleto.bairro;
    cidade.value = enderecoCompleto.localidade;
    estado.value = enderecoCompleto.uf;
}