const numero = document.querySelectorAll('input[type=button]');
const entrada = document.querySelector('input[type=tel]')

for (let i = 0; i < numero.length; i++) {
    
    const tecla = numero[i];

    tecla.onclick = function () {
      entrada.value += tecla.value;
    }

    tecla.onkeydown = function(event) {
        if (event.code === "Enter" || event.code === "Space") {
            tecla.classList.add('ativa');
        }
    } 
    
    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
}

