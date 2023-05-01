import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const THROTTLE_TIME = 1000; 
const storageKey = 'vimeo-paused-time';

player.on(
  'timeupdate',
  throttle(() => {
    player.getCurrentTime().then(currentTime => {
      localStorage.setItem(storageKey, currentTime);
    });
  }, THROTTLE_TIME)
);

const savedTime = localStorage.getItem(storageKey);
if (savedTime) {
  player.setCurrentTime(savedTime);
}