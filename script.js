let imagemLampada = document.getElementById("lampada")
let acender = document.getElementById("acenda")
let apagar = document.getElementById("apaga")

let quebrada = "nao"

imagemLampada.addEventListener('click', function () {
    imagemLampada.style.backgroundImage = "url(imagens/lampada-quebrada.png)"
    quebrada = "sim"
})

imagemLampada.addEventListener('mouseenter', function () {
    if (quebrada == "nao") {
        imagemLampada.style.backgroundImage = "url(imagens/lampada-acesa.png)"
    }
})

imagemLampada.addEventListener('mouseleave', function () {
    if (quebrada == "nao") {
        imagemLampada.style.backgroundImage = "url(imagens/lampada-apagada.png)"
    }
})

acender.addEventListener('click', function () {
    if (quebrada == "nao") {
        imagemLampada.style.backgroundImage = "url(imagens/lampada-acesa.png)"
    }
})

apagar.addEventListener('click', function () {
    if (quebrada == "nao") {
        imagemLampada.style.backgroundImage = "url(imagens/lampada-apagada.png)"
    }
})