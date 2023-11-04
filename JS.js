    //PEGAR O ELEMENTO
    const web = document.getElementById('web');

    //EVENTO QUANDO MOUSE ESTIVER POR CIMA DA IMAGEM
    web.addEventListener('mouseover' , function () {
        web.src = "img/tecnologia.jpg"
    });

    //EVENTO QUANDO O MOUSE SAIR DE CIMA DA IMAGEM
    web.addEventListener('mouseout' , function () {
        web.src = "img/23-12-2.jpg"
    })
