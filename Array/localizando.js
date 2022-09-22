const alunos = ['joao', 'ana', 'caio', 'lara', 'marjorie', 'leo']

const mediadosalunos = [10, 7, 9, 6, 8, 10] 

let listadenotasealunos = [alunos, mediadosalunos]

const exibenomenota = (nomedoaluno) => {
    if (listadenotasealunos[0].includes(nomedoaluno)){              //includes retorna true ou false
        let indice = listadenotasealunos[0].indexOf(nomedoaluno)    //indexof retorna o numero do indice (3)
        return listadenotasealunos[0][indice] + ', sua media é ' + listadenotasealunos[1][indice]
    } else {
        return "aluno nao esta cadastrado"
    }
}

console.log(exibenomenota("ana"))