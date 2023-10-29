document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('audio');
    var audioButton = document.getElementById('audioButton');
    var audioImage = document.getElementById('audioImage');

    audioButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            audioButton.textContent = 'Stop'; // Altera o texto do botão
            audioImage.src = 'https://github.com/josemoises2007/h/assets/106701602/1160db46-1eec-4d51-8197-8b86aed71b7a'; // Altera a imagem para pausa
        } else {
            audio.pause();
            audioButton.textContent = 'Play'; // Altera o texto do botão
            audioImage.src = 'https://github.com/josemoises2007/h/assets/106701602/3fe155bb-0701-4074-9f17-23f0d2c73f2b'; // Altera a imagem para reprodução
        }
    });

    audio.addEventListener('ended', function() {
        audioButton.textContent = 'Play'; // Restaura o texto do botão
        audioImage.src = 'https://github.com/josemoises2007/h/assets/106701602/1160db46-1eec-4d51-8197-8b86aed71b7a'; // Restaura a imagem para reprodução ao finalizar a música
    });
});
