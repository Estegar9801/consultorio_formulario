var imgs = document.querySelectorAll(".slider-item");
var dots = document.querySelectorAll(".dot");
var imagenActual = 0;
const intervalo = 3000;
desplazarImagenAuto();

function cambiarSlider() {
    imgs.forEach((imagen) => { 
        imagen.style.opacity = 0;
    });
    dots.forEach((punto) => { punto.className = punto.className.replace(" active", ""); });
    imgs[imagenActual].style.opacity = 1;
    dots[imagenActual].className += " active";
}

function cambiarIndice(n) {
    imagenActual = n;
    cambiarSlider();
}

function desplazarImagenAuto() {    
    desplazarImagen(1);
    setTimeout(desplazarImagenAuto, 5000);
}

function desplazarImagen(n) {
    imagenActual += n;
    if (imagenActual >= imgs.length) { imagenActual = 0; } 
    else if (imagenActual < 0) { imagenActual = imgs.length - 1; }
    cambiarSlider();
}