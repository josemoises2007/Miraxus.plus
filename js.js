var audio = document.getElementById('audio');
var audioButton = document.getElementById('audioButton');
var audioImage = document.getElementById('audioImage');
audioButton.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        audioButton.textContent = 'stop'; // Cambiar el texto del botón
        audioImage.src = 'https://github.com/josemoises2007/h/assets/106701602/1160db46-1eec-4d51-8197-8b86aed71b7a'; // Cambiar la imagen a pausa
    } else {
        audio.pause();
        audioButton.textContent = 'Play'; // Cambiar el texto del botón
        audioImage.src = 'https://github.com/josemoises2007/h/assets/106701602/3fe155bb-0701-4074-9f17-23f0d2c73f2b'; // Cambiar la imagen a reproducción
    }
});

audio.addEventListener('ended', function() {
    audio.play();
    audioButton.textContent = 'Stop'; // Restaurar el texto del botón
    audioImage.src = 'https://github.com/josemoises2007/h/assets/106701602/1160db46-1eec-4d51-8197-8b86aed71b7a'; // Restaurar la imagen a pausa al finalizar la canción
});
