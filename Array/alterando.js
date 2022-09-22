//atulizando elementos com splice

const turma = ['joao', 'ana', 'caio', 'lara', 'marjorie', 'leo']

turma.splice(1,2,'Rodrigo')                 // primeiro parametro é o indice é onde começa a alterar, 
                                            // segundo parametro é a quantidade de elementos alterados, 
                                            //terceiro parametro altera o conteudo que queremos adicionar no lugar

console.log(`lista de chamada: ${turma}`)


//Podemos nao alterar nenhum elemento e adicionar algo novo:

const classe = ['joao', 'ana', 'caio', 'lara', 'marjorie', 'leo']

classe.splice(2,0,'rodrigo')

console.log(`lista de chamada: ${classe}`)