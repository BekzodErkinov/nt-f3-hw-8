import videoList from '../data/video.js'
import advertisingList from '../data/ads.js'

// * DOM ELEMENTS
const videoHolder = document.querySelector('.video-holder')
const elVideo = document.querySelector('#video-player')
const elVideoTitle = document.querySelector('#video-title > h1')
const elVideoSource = document.querySelector('#video-source')
const elVideoControlsWrap = document.querySelector('.video-controls')
const videoProgressbar = elVideoControlsWrap.querySelector('#video-progressbar')
// Video times
const videoCurrentTime = elVideoControlsWrap.querySelector('#video-current-time')
const videoFullTime = elVideoControlsWrap.querySelector('#video-full-time')
// Video controls
const playPauseBtn = elVideoControlsWrap.querySelector('#play-pause-btn')
const playPauseBtnIcon = elVideoControlsWrap.querySelector('#play-pause-btn > img')
const backrwardBtn = elVideoControlsWrap.querySelector('#backrward-btn')
const forwardBtn = elVideoControlsWrap.querySelector('#forward-btn')
const prevBtn = elVideoControlsWrap.querySelector('#prev-btn')
const nextBtn = elVideoControlsWrap.querySelector('#next-btn')
const muteBtn = elVideoControlsWrap.querySelector('#mute-btn')
const volumeIcon = elVideoControlsWrap.querySelector('#volume-icon')
const videoSoundProgressbar = elVideoControlsWrap.querySelector('#video-sound-progressbar')
const elVideoFullScreen = elVideoControlsWrap.querySelector('#full-screen')

window.addEventListener('load', () => {
  videoFullTime.textContent = elVideo.duration.toFixed(0)
  videoCurrentTime.textContent = elVideo.currentTime.toFixed(0)
  videoProgressbar.value = 0
  videoSoundProgressbar.value = 100

  elVideoSource.src = `${videoList[index].src}`
  elVideoTitle.textContent = videoList[index].title
})



function showVideoControls() {
  const videoControlsWrapHide = elVideoControlsWrap.style.transform = 'translateY(0)'
  const videoControlsWrapShow = elVideoControlsWrap.style.transform = 'translateY(59px)'

  if (videoControlsWrapHide === videoControlsWrapHide) {
    
  }
}





// * Play
function videoOnPlay() {
  setInterval(() => {
    videoCurrentTime.textContent = elVideo.currentTime.toFixed(0)
    videoProgressbar.value = (elVideo.currentTime * 100) / elVideo.duration
  }, 1000)
}

// * Pause
function videoOnPause() {
  console.log('Advertising')// Function bo'ladi keyinro
}



elVideo.on('play', videoOnPlay)
elVideo.on('pause', videoOnPause)
videoHolder.on('mouseover', )