import Player from "@vimeo/player";
      const iframe = document.querySelector('iframe');
      const player = new Player(iframe);
  
      player.on('play', function() {
          console.log('played the video!');
      });
  
      player.getVideoTitle().then(function(title) {
          console.log('title:', title);
      });

    //   const timeupdate = function() {
    //     console.log(timeupdate.duration);
    //   }

    //   player.on('timeupdate', timeupdate);
