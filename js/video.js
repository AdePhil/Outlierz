window.onload = function() {
  // Video
  let video = document.querySelector('.video');

  // Buttons
  let playButton = document.querySelector('.play-pause');
  let muteButton = document.querySelector('.mute');
  let fullScreenButton = document.querySelector('.full-screen');

  // Sliders
  let seekBar = document.querySelector('.seek-bar');
  let volumeBar = document.querySelector('.volume-bar');

  // Event listener for the play/pause button
  playButton.addEventListener('click', () => {
    if (video.paused) {
      // Play the video
      video.play();

      // Update the button text to 'Pause'
      playButton.innerHTML = 'Pause';
    } else {
      // Pause the video
      video.pause();

      // Update the button text to 'Play'
      playButton.innerHTML = 'Play';
    }
  });

  // Event listener for the mute button
  muteButton.addEventListener('click', () => {
    if (video.muted == false) {
      // Mute the video
      video.muted = true;

      // Update the button text
      muteButton.innerHTML = 'Unmute';
    } else {
      // Unmute the video
      video.muted = false;

      // Update the button text
      muteButton.innerHTML = 'Mute';
    }
  });

  // Event listener for the full-screen button
  fullScreenButton.addEventListener('click', () => {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen(); // Firefox
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen(); // Chrome and Safari
    }
  });

  // Event listener for the seek bar
  seekBar.addEventListener('change', () => {
    // Calculate the new time
    let time = video.duration * (seekBar.value / 100);

    // Update the video time
    video.currentTime = time;
  });

  // Update the seek bar as the video plays
  video.addEventListener('timeupdate', () => {
    // Calculate the slider value
    var value = 100 / video.duration * video.currentTime;

    // Update the slider value
    seekBar.value = value;
  });

  // Pause the video when the seek handle is being dragged
  seekBar.addEventListener('mousedown', () => {
    video.pause();
  });

  // Play the video when the seek handle is dropped
  seekBar.addEventListener('mouseup', () => {
    video.play();
  });

  // Event listener for the volume bar
  volumeBar.addEventListener('change', () => {
    // Update the video volume
    video.volume = volumeBar.value;
  });
};
