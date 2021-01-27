const app = () => {

   const play = document.querySelector('.play');
   const song = document.querySelector('.song');
   const video = document.querySelector('.vid-container video');
   const outline = document.querySelector('.moving-outline circle');
   //sounds
   const sounds = document.querySelectorAll('.sound-picker button');
   //time display
   const timeDisplay = document.querySelector('.time-display');
   const timeSelect = document.querySelectorAll('.time-select button')
   //Get the Lenght oof the outline
   const outlineLength = outline.getTotalLength();
   //duration
   let fakeDuration = 600;

      outline.style.strokeDasharray = outlineLength;
      outline.style.strokeDashoffset = outlineLength;

      //pick different sounds 
      sounds.forEach(sound =>{
         sound.addEventListener('click' , function(){
            song.src = this.getAttribute('data-sound')
            video.src = this.getAttribute('data-video')
         })
      })

      //play sound 
      play.addEventListener('click' , () => {
         checkplaying(song)
      })

      timeSelect.forEach(option => {
         option.addEventListener('click' , function(){
            fakeDuration= this.getAttribute('date-time');
            timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(fakeDuration % 60)}`
         });
      });
   


      //creat function spesific to stop / play sounds 
      const checkplaying = song => {
         if (song.paused) {
         song.play();
         video.play();
         play.src = './svg/pause.svg'
         }
      else {
         song.pause();
         video.pause();
         play.src = './svg/play.svg'
       }
      }
//we can animate the circle 
song.ontimeupdate = () => {
   let currentTime = song.currentTime;
   let elapsed = fakeDuration - currentTime;
   let seconds = Math.floor(elapsed % 60) ;
   let minutes = Math.floor(elapsed / 60);
   //animate the bar
   let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
   outline.style.strokeDashoffset = progress;
   //animate the text 
   timeDisplay.textContent = `${minutes} : ${seconds}`
   if (currentTime >= fakeDuration) {
      song.pause ();
      song.currentTime = 0 ;
      play.src = './svg/play.svg';
      video.pause()
   }
  };

};

app();