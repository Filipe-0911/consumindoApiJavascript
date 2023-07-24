var pegaCep = document.getElementById('cep');
var cep = `71060639`;

    var consultaCep = fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(resposta => resposta.json())
    .then(r => {
        //utilizado r.erro pois quando informado um cep de formato valido ele retorna um erro = true
        if(r.erro) { 
            throw Error('Esse CEP não existe!')
        } else {
            console.log(r)
        }
        })
    .catch(erro => {
        if(erro) {
            throw Error('Cep inválido!')
        } 
    })
    .finally(mensagem => console.log('Processamento concluído'));

