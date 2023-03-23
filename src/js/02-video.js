import Player from "@vimeo/player";
import throttle from "lodash.throttle";

      const iframe = document.querySelector('iframe');
      const player = new Player(iframe);
      const CURRENT_TIME = "videoplayer-current-time";
     
      player.on('timeupdate', throttle(onPlayTimeUpdate, 2000)); 

      function onPlayTimeUpdate(e) {
        const currentTimeValue = e.seconds;
        console.log(currentTimeValue);
        
        localStorage.setItem(CURRENT_TIME, currentTimeValue);
      }
      
  player.setCurrentTime(localStorage.getItem(CURRENT_TIME));