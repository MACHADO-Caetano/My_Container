function Aparecer_Formacao(){
    document.getElementById('formacao').style.display = 'block'
    const botao_aparecer = document.createElement('button')
    botao_aparecer.innerText = 'Fechar'
    const fecha = document.getElementById('fechamento')
    fecha.appendChild(botao_aparecer)
    botao_aparecer.addEventListener('click', function(){
        document.getElementById('formacao').style.display = 'none'
        fecha.removeChild(botao_aparecer)
    })
}

function Aparecer_Softskills(){
    document.getElementById('softskills').style.display = 'block'
    const botao_aparecer2 = document.createElement('button')
    botao_aparecer2.innerText = 'Fechar'
    const fecha2 = document.getElementById('soft')
    fecha2.appendChild(botao_aparecer2)
    botao_aparecer2.addEventListener('click', function(){
        document.getElementById('softskills').style.display = 'none'
        fecha2.removeChild(botao_aparecer2)
    })
}

function Aparecer_Hardskills(){
    document.getElementById('hardskills').style.display = 'block'
    const botao_aparecer3 = document.createElement('button')
    botao_aparecer3.innerText = 'Fechar'
    const fecha3 = document.getElementById('hard')
    fecha3.appendChild(botao_aparecer3)
    botao_aparecer3.addEventListener('click', function(){
        document.getElementById('hardskills').style.display = 'none'
        fecha3.removeChild(botao_aparecer3)
    })
}

function Aparecer_Experiencias(){
    document.getElementById('experiencia').style.display = 'block'
    const botao_aparecer4 = document.createElement('button')
    botao_aparecer4.innerText = 'Fechar'
    const fecha4 = document.getElementById('anteriores')
    fecha4.appendChild(botao_aparecer4)
    botao_aparecer4.addEventListener('click', function(){
        document.getElementById('experiencia').style.display = 'none'
        fecha4.removeChild(botao_aparecer4)
    })
}

function Aparecer_Sobremim(){
    document.getElementById('mim').style.display = 'block'
    const testeAparecer = document.createElement('button')
    testeAparecer.innerText = 'Fechar'
    const artigo = document.getElementById('teste')
    artigo.appendChild(testeAparecer)
    testeAparecer.addEventListener('click', function(){
        document.getElementById('mim').style.display = 'none'
        artigo.removeChild(testeAparecer)
    })
}