const clock = document.querySelector('.clock');
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const timerZero = document.querySelector('.timerZero');

play.addEventListener('click', function(event) {
    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    const timerInterval = setInterval(function() {
        seconds++;
        if (seconds > 59) {
            seconds = 0;
            minutes++;
        }
        if (minutes > 59) {
            minutes = 0;
            hours++;
        }
        clock.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000); 

    pause.addEventListener('click', function(event) {
        clearInterval(timerInterval);
    });
}); 