/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
const isTruthy = function(param){
    return !!param
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
console.log(isTruthy(undefined))
console.log(isTruthy(false))
console.log(isTruthy(null))
console.log(isTruthy(''))
console.log(isTruthy(0))
console.log(isTruthy(NaN))

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
console.log(isTruthy(true))
console.log(isTruthy('trufhy'))
console.log(isTruthy(10))
console.log(isTruthy([]))
console.log(isTruthy({}))
console.log(isTruthy(() => ''))
console.log(isTruthy(function() {}))

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
let carro = {
    marca: 'Honda',
    modelo: 'HRV',
    placa: 'FCZ-7717',
    ano: 2016,
    cor: 'prata',
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function(cor) {
    carro.cor = cor
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function() {
    return carro.cor
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function() {
    return carro.modelo
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function() {
    return carro.marca
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function() {
    return `Esse carro é um ${carro.obterMarca()} ${carro.obterModelo()}`
}

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
carro.adicionarPessoas = function(qtd) {

    let qtdAcentosRestante = carro.assentos - carro.quantidadePessoas

    if(!qtdAcentosRestante && qtd > 0)
        return 'O carro já está lotado!'
        
    if(qtd > qtdAcentosRestante)
        return `Só cabe${qtdAcentosRestante > 0 ? 'm' : ''} mais ${qtdAcentosRestante} pessoa${qtdAcentosRestante > 0 ? 's' : ''}!`

    qtdAcentosRestante = carro.assentos - (carro.quantidadePessoas += qtd)
    return `Já temos ${carro.quantidadePessoas} pessoa${carro.quantidadePessoas > 1 ? 's' : ''} no carro!`
}


console.log('_________________')
/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro//?
*/
console.log(carro.obterCor())

// Mude a cor do carro para vermelho.
carro.mudarCor('vermelho')

// E agora, qual a cor do carro//?
console.log(carro.obterCor())

// Mude a cor do carro para verde musgo.
carro.mudarCor('verde musgo')

// E agora, qual a cor do carro//?
console.log(carro.obterCor())

// Qual a marca e modelo do carro//?
console.log(carro.obterMarcaModelo())

// Adicione 2 pessoas no carro.
console.log(carro.adicionarPessoas(2))

// Adicione mais 4 pessoas no carro.
console.log(carro.adicionarPessoas(4))

// Faça o carro encher.
console.log(carro.adicionarPessoas(3))

// Tire 4 pessoas do carro.
console.log(carro.adicionarPessoas(-4))

// Adicione 10 pessoas no carro.
console.log(carro.adicionarPessoas(10))

// Quantas pessoas temos no carro//?
console.log(carro.quantidadePessoas)
