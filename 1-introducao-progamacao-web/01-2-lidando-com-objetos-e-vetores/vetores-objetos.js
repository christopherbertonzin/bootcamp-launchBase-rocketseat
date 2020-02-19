const dev = {
    nome: 'Christopher',
    idade: 21,
    tecnologias: [
        {
            nome: 'node',
            especialidade: 'server'
        },
        {
            nome: 'react',
            especialidade: 'web',
        },
        {
            nome: 'react-native',
            especialidade: 'mobile'
        }
    ],
}

console.log(`o usuário ${dev.nome} tem ${dev.idade} anos e usa a tecnologia ${dev.tecnologias[0].nome} com epecialidade em ${dev.tecnologias[0].especialidade}`);