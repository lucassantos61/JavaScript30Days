// Get ours elements

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filed');
const toggle = player.querySelector('.toggle');
const skipeButtons = player.querySelector('[data-skip]');
const ranges = player.querySelector('.player__slider');

//Build our functions 

function togglePlay() {
    const  method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateButton() {
    console.log('Update Button');
}
//Hook up the events listeners 

video.addEventListener('click',togglePlay);
video.addEventListener('play',updateButton);
video.addEventListener('pause',updateButton);
toggle.addEventListener('click',togglePlay);