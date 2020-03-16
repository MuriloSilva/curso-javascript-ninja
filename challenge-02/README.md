# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(numero1, numero2) { 
    return numero1 + numero2;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var valor = soma(10,5) + 5;

// Qual o valor atualizado dessa variável?
20

// Declare uma nova variável, sem valor.
var var2;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function adicionaValor() {
    var2 = 25;
    return `O valor da variável agora é ${var2}.`;
}

// Invoque a função criada acima.
adicionaValor(va2,33);

// Qual o retorno da função? (Use comentários de bloco).
/*
    A função retorna um dado do tipo String
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function validaValores(parm1, parm2, parm3) {
    if(typeof parm1 == 'undefined' || typeof parm2 == 'undefined' || typeof parm3 == 'undefined') {
        return 'Preencha todos os valores corretamente!';
    } else {
        return (parm1 * parm2 * parm3) + 2;
    }
}

// Invoque a função criada acima, passando só dois números como argumento.
validaValores(3,5);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
validaValores(1,3,5);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 17

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function testaVariaveis(var1,var2,var3) {
    
    if(var1 === undefined) return false;

    if(var2 === undefined) return var1;

    if(var3 === undefined) return var1 + var2;

    return (var1 + var2) / var3;
    
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
testaVariaveis();
// false

testaVariaveis(1);
// 1

testaVariaveis(1,2);
// 3

testaVariaveis(1,19,4);
// 5
```