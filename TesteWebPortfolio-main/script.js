// Função para reproduzir o som ao carregar o site
document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('site-sound');
    audio.play().catch(function(error) {
        console.log('Autoplay bloqueado pelo navegador: ' + error);
    });
});

const typingElement = document.getElementById('typing-effect');
const text = 'Seja bem-vindo!';
let index = 0;
let isTyping = true;

function typeEffect() {
    if (isTyping) {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        } else {
            isTyping = false;
            setTimeout(typeEffect, 1000);
        }
    } else {
        if (index > 0) {
            typingElement.textContent = text.substring(0, index - 1);
            index--;
            setTimeout(typeEffect, 50);
        } else {
            isTyping = true;
            setTimeout(typeEffect, 1000);
        }
    }
}

typeEffect();
