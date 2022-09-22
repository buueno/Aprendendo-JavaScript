const notas = [10, 6.5, 8, 7.5]

let somadasnotas = 0

notas.forEach(nota => {                 //ao contratio da media for, nao precisamos declarar o indice
                                        //o laço de repetição é automatico para cada um de notas
    somadasnotas += nota
})

let media = somadasnotas/notas.length

console.log(media)