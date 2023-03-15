import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

function onTime(e) {
    console.log(e.seconds)

 localStorage.setItem(LOCALSTORAGE_KEY, e.seconds);
}

player.on('timeupdate', throttle(onTime, 1000));

const currentTime = localStorage.getItem(LOCALSTORAGE_KEY);
console.log(currentTime);


if (currentTime) {
    player.setCurrentTime(currentTime).then(function (seconds) {
        console.log(seconds);
    })
        .catch(function (error) {
            switch (error.name) {
                case 'RangeError':
                    break;

                default:
                    break;
            }
        })
}
