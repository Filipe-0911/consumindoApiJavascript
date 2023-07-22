var endereco = document.getElementById(`endereco`);
var bairro = document.getElementById(`bairro`);
var cidade = document.getElementById(`cidade`);
var estado = document.getElementById(`estado`);
var cep = document.getElementById('cep');
var mensagemErro = document.getElementById(`erro`);

async function buscaEndereco(cep) {
    mensagemErro.innerHTML = "";
    var cepModificar = document.getElementById('cep');
    try {
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCepConvertida = await consultaCep.json();

        if (consultaCepConvertida.erro) {
            throw Error(`CEP não existente!`)
        }
        cepModificar.className = `campo__escrita`;
        return insereDadosHtml(consultaCepConvertida);

    } catch (erro) {
        cepModificar.className = `campo__escrita2`;
        mensagemErro.innerHTML = `<span class="erro__imagem">
        </span><p class="erro__texto">CEP inválido. Tente novamente!</p>`;
        
    }
}

cep.addEventListener(`focusout`, () => buscaEndereco(cep.value));

function insereDadosHtml(enderecoCompleto) {
    endereco.value = enderecoCompleto.logradouro;
    bairro.value = enderecoCompleto.bairro;
    cidade.value = enderecoCompleto.localidade;
    estado.value = enderecoCompleto.uf;
}