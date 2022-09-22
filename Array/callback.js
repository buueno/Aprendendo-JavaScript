const nomescle = ['ana', 'ju', 'leo', 'paula']

nomes.forEach(imprimenomes)             //call back são funções que chama outras funções
                                        // e pode ser usado posteriormente para ser usado em qualquer array, facilitando

function imprimenomes(nome) {           // escrever a função fora do foreach é bom para usar a mesma em varios locais
    console.log(nome)
}