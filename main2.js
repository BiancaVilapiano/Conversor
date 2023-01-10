//importa o fs

const fs = require('fs')
// acessar a pasta, lendo os arquivos e transformando em um array

const filesname = fs.readdirSync('input')

// loop que faz com que o sistema leia o tamanho do array
for(let i = 0; i < filesname.length; i++){

    //variaveis que tiram as extencoes
    let foto = filesname[i]

    //replace, usado para tirar tudo a partir do caracter indicado
    let fotosx = foto.replace(/\.[^/.]+$/, "")

    //rename, renomeia a foto, conforme o indice dela, e a transforma em outra string conforme passado no ''
    
    //CRIAR PASTA OUTPUT PARA SAIDA DAS FOTOS
    
    fs.rename('input/' + foto, 'output/' + fotosx + '.png', function(erro){
        //se aparentar um erro, ira aparecer na tela uma mensagem de erro.
        if(erro) throw erro;{
            console.log('file renamed')
        }


    })
}



