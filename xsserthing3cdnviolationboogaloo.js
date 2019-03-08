// it's PROBABLY not going to get any of us permabanned right
var audio = new Audio('https://s.put.re/rJsPWpXZ.mp3')
isPlaying = false;
function playWhenReady(){
if(!audio.readyState && !isPlaying){
return 0;
}
  isPlaying = true;
  audio.play();
}
setInterval(playWhenReady,1000)
