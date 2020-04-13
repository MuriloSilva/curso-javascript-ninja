/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/
(function() {
    /*
    Crie um objeto chamado `person`, com as propriedades:
        `name`: String
        `lastname`: String
        `age`: Number
    Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
    de valor para cada propriedade.
    */
    let person = {
        name: 'Murilo',
        lastname: 'De Paula',
        age: 35
    }
    console.log( 'Propriedades de "person":' );

    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */
    console.log(Object.keys(person))

    /*
    Crie um array vazio chamado `books`.
    */
    let books = []

    /*
    Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
    seguintes propriedades:
    `name`: String
    `pages`: Number
    */
    books.push({name: 'Dom Quixote', pages: 863})
    books.push({name: 'Uma breve história do tempo', pages: 256})
    books.push({name: 'Uma Comovente Obra de Espantoso Talento', pages: 460})
    
    console.log( '\nLista de livros:' );

    /*
    Mostre no console todos os livros.
    */
    books.forEach((book) => console.log(book))

    console.log( '\nLivro que está sendo removido:' );

    /*
    Remova o último livro, e mostre-o no console.
    */
    console.log(books.pop())

    console.log( '\nAgora sobraram somente os livros:' );
    /*
    Mostre no console os livros restantes.
    */
    books.forEach(book => console.log(book))

    /*
    Converta os objetos que ficaram em `books` para strings.
    */
    console.log( '\nLivros em formato string:' );
    const textBooks = books.map((book) => JSON.stringify(book))

    /*
    Mostre os livros nesse formato no console:
    */
    textBooks.forEach((book) => console.log(book))

    /*
    Converta os livros novamente para objeto.
    */
    books = textBooks.map((book) => JSON.parse(book))
    console.log( '\nAgora os livros são objetos novamente:' )

    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */
   books.forEach((book,index) => {
        console.log('book',index+1)    
        Object.keys(book).forEach((prop) => console.log(`   ${prop}:${book[prop]}`))
        console.log()   
    })

    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    // ?
    console.log( '\nMeu nome é:' );
    let myName = 'Murilo Rodrigues de Paula'.split('')

    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
    console.log(myName.join(''))
    
    console.log( '\nMeu nome invertido é:' );
    
    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
    console.log(myName.reverse().join(''))
   
   
    console.log( '\nAgora em ordem alfabética:' );
    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */
    console.log(myName.sort())
})()