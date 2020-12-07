const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed_bar');
const video = document.querySelector('.flowers');

function handleMove (e) {
  const y = e.pageY - this.offsetTop;
  const persent = y / this.offsetHeight;
  const min = 0.4;
  const max = 4;
  const height = Math.round(persent * 100) + '%';
  const playbackRate = persent * (max - min) + min;
  bar.style.height = height;
  bar.textContent = playbackRate.toFixed(2) + '×';
  video.playbackRate = playbackRate;
}

speed.addEventListener( 'mousemove', handleMove);
