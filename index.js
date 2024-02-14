const clock = document.querySelector('.clock');
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const timerZero = document.querySelector('.timerZero');

play.addEventListener('click', function(event) {
    alert("Cliquei em 'Iniciar'");
});

pause.addEventListener('click', function(event) {
    alert("Cliquei em 'Pausar'");
});

timerZero.addEventListener('click', function(event) {
    alert("Cliquei em 'Zerar'");
});
