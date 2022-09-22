const nomes = ['ana', 'marcos', 'maria', 'mauro']
const notas = [7, 4.5, 8, 7.5]

const reprovados = nomes.filter((alunos,indice) => notas[indice] < 5)  //o parametro alunos nao esta sendo usado
                                                                      //poderia ser substituido por _ 
                                                                      // o nome aparece pq filtrer esta associado com nomes 

console.log(`reprovados: ${reprovados}`)