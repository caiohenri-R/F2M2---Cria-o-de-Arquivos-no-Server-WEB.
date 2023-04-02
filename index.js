// Criação de Arquivos no Servidor WEB.

const http = require('http');
const fs = require('fs');
const porta = 443

const server = http.createServer((req,res) =>{
    fs.appendFile('teste.txt', 'Frase criada pelo appendFile diretamente no txt', (erro) => {
        if(erro) throw erro
        console.log('Arquivo criado')
        res.end()
    })
})
server.listen(porta, () => {
    console.log('Servidor Rodando')
})