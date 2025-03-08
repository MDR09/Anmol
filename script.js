document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("bgVideo");
  
    // Start the video from 5 seconds initially
    // video.currentTime = 5;
    // video.play();
  
    video.addEventListener("ended", function () {
        // After finishing, always restart from 5 seconds
        video.currentTime = 7 ;
        video.play();
    });
  });

  const musicBtn = document.getElementById('toggleMusic');
  const musicIcon = document.getElementById('musicIcon');
  const audio = new Audio();
  audio.src = 'birthday-song.mp3';
  audio.play().catch(error => console.error('Audio playback failed:', error));
  console.log(audio.src);
  audio.volume = 1.0; // Set full volume
  audio.muted = false;
  
  musicBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      musicIcon.textContent = '🔇';
    } else {
      audio.pause();
      musicIcon.textContent = '🔊';
    }
  });