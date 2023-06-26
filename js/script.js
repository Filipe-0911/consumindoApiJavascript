var cep = prompt('Digite um CEP');

var consultaCep = fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(resposta => resposta.json())
    .then(r => {
        if(r.erro) {
            throw Error('Esse CEP não existe!')
        } else {
            console.log(r)
        }
        })
    .catch(erro => console.log(erro))
    .finally(mensagem => console.log('Processamento concluído'));
