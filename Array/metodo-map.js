const notas = [10, 9, 8, 7, 6]

const notasatualizadas = notas.map(nota => nota == 10 ? 
nota : ++nota)

console.log(notasatualizadas)


// o map, diferente do for each, retorna uma nova array, que precisa estar em uma variavel (notasatualizadas)