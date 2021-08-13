/*
let infoUsuario = {
    usuario: 'Jucicleison',
    nomeCompleto: 'Jucicleison da Silva Souza',
    grupo: 'alunos',
    senha: '12345678'
}
*/


let usuario = 'Jucicleison'
let nomeCompleto = 'Jucicleison da Silva Souza'
let grupo = 'alunos'
let password = '12345678'

// Criação de objeto cujo valor das propriedades vêm de
// variáveis previamente existentes
let infoUsuario = {
    usuario, //usuario: usuario,
    nome: nomeCompleto,
    grupo, //grupo: grupo,
    senha: password
}


console.log(infoUsuario)

// Propriedades abreviadas são íteos em depuração para exibir o nome da variável junto com seu valor
console.log({password})
console.log({grupo})
console.log({password, grupo})