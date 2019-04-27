let countDown;
const timeDisplay = document.querySelector('.display__time-left');
const endTIme  =document.querySelector('.display__end-time');
const buttons =  document.querySelectorAll('.timer__button');
function timer(seconds) {
    clearInterval(countDown);
    const now = Date.now();
    const then  = now + seconds * 1000 ;
    displayTimeLeft(seconds);
    displyEndTime(then);
    countDown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft <= 0 ) {
            clearInterval(countDown);
            return;
        }
         displayTimeLeft(secondsLeft);
    },1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const dispaly = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    timeDisplay.textContent = dispaly;
    document.title = dispaly;
    console.log({seconds,remainderSeconds});
}

function displyEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const adjustHour = hour > 12 ? hour - 12 : hour;
    const minutes = end.getMinutes();
    endTIme.textContent = `Be abck at ${adjustHour}:${minutes < 10 ? '0' : ''}${minutes}`;
}
function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}
buttons.forEach(button => button.addEventListener('click',startTimer));
document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    console.log(mins);
    timer(mins * 60);
    this.reset()
})
