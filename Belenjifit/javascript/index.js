window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) { // Cambia 50 según la cantidad de scroll que deseas
        navbar.classList.add('transparent');
    } else {
        navbar.classList.remove('transparent');
    }
});


function aceptarPolitica() {
    localStorage.setItem('politicaAceptada', 'true');
    document.getElementById('politicaPrivacidad').style.display = 'none';
}

function rechazarPolitica() {
    alert('Debe aceptar la política de privacidad y cookies para utilizar este sitio web.');
}

window.onload = function() {
    var politicaAceptada = localStorage.getItem('politicaAceptada');
    if (!politicaAceptada) {
        document.getElementById('politicaPrivacidad').style.display = 'block';
    }
}

