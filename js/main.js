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


elVideo.addEventListener('loadedmetadata', () => {
  videoFullTime.textContent = elVideo.duration.toFixed(0)
  videoCurrentTime.textContent = elVideo.currentTime.toFixed(0)
  videoProgressbar.value = 0
  videoSoundProgressbar.value = 100
  
  elVideoSource.src = `${videoList[index].src}`
  elVideoTitle.textContent = videoList[index].title
})


// * Play | Pause
elVideo.addEventListener('play', () => {
  setInterval(() => {
    videoCurrentTime.textContent = elVideo.currentTime.toFixed(0)
    videoProgressbar.value = (elVideo.currentTime * 100) / elVideo.duration
  }, 1000)
})

elVideo.addEventListener('pause', () => console.log('reklama'))


// * CLICK EVENTS
// * Show | Hide Video controls
videoHolder.addEventListener('mouseover', () => {
  elVideoControlsWrap.style.transform = 'translateY(0)'
})

videoHolder.addEventListener('mouseout', () => {
  elVideoControlsWrap.style.transform = 'translateY(59px)'
})

// * Play | Pause buttons
playPauseBtn.addEventListener('click', () => {
  if (elVideo.paused) {
    elVideo.play()
    playPauseBtnIcon.setAttribute('src', 'https://img.icons8.com/ios-glyphs/24/ffffff/pause--v1.png')
  } else {
    elVideo.pause()
    playPauseBtnIcon.setAttribute('src', 'https://img.icons8.com/ios-glyphs/24/ffffff/play--v1.png')
    elVideo.addEventListener('pause', () => console.log('reklama'))
  }
})

// * Backward | Forward buttons
backrwardBtn.addEventListener('click', () => elVideo.currentTime -= 10)
forwardBtn.addEventListener('click', () => elVideo.currentTime += 10)

// * Mute button
muteBtn.addEventListener('click', () => {
  elVideo.volume = 0
  videoSoundProgressbar.value = 0
  volumeIcon.setAttribute('src', './img/volume-up-interface-symbol-4.svg')
})

// * elVideo Play | Pause on click
elVideo.addEventListener('click', () => {
  if (elVideo.paused) {
    elVideo.play()
    playPauseBtnIcon.setAttribute('src', 'https://img.icons8.com/ios-glyphs/24/ffffff/pause--v1.png')
  } else {
    elVideo.pause()
    playPauseBtnIcon.setAttribute('src', 'https://img.icons8.com/ios-glyphs/24/ffffff/play--v1.png')
  }
})

// * Full Screen button
elVideoFullScreen.addEventListener('click', () => {
  elVideo.webkitRequestFullscreen()
})

// * elVideo Full Screen on dblclick
elVideo.addEventListener('dblclick', () => {
  elVideo.webkitRequestFullScreen()
})

// * Volume change
elVideo.addEventListener('volumechange', () => {
  let videoSoundVolume = elVideo.volume * 100// SAVOL: Funksiyadan tashqariga chiqarilsa volumeIcon ishlamayapti (nima uchun)!

  if (videoSoundVolume > 70) {
    volumeIcon.setAttribute('src', './img/volume-up-interface-symbol-1.svg')
  } else if (videoSoundVolume > 30 && videoSoundVolume < 70) {
    volumeIcon.setAttribute('src', './img/volume-up-interface-symbol-2.svg')
  } else if (videoSoundVolume > 10 && videoSoundVolume < 30) {
    volumeIcon.setAttribute('src', './img/volume-up-interface-symbol-3.svg')
  } else if (videoSoundVolume > 0 && videoSoundVolume < 10) {
    volumeIcon.setAttribute('src', './img/volume-up-interface-symbol-4.svg')
  }
})


// * Video | Video sound progressbars
videoProgressbar.addEventListener('change', () => elVideo.currentTime = (videoProgressbar.value * elVideo.duration) / 100)// ???
videoSoundProgressbar.addEventListener('change', () => elVideo.volume = videoSoundProgressbar.value / 100)


// * Video Ended
elVideo.addEventListener('ended', () => elVideo.currentTime = 0)


// * Previous | Next buttons
let index = 0
prevBtn.addEventListener('click', () => {
  if (index > 0) {
    index--
    elVideo.setAttribute('src', `${videoList[index].src}`)
    elVideoTitle.textContent = videoList[index].title
  }
})

nextBtn.addEventListener('click', () => {
  if (index < videoList.length) {
    elVideo.setAttribute('src', `${videoList[index].src}`)
    elVideoTitle.textContent = videoList[index].title
    index++
  }
})

// * Hot Keys
window.addEventListener('keydown', e => {
  console.log(e)
  // Play | Pause
  if (e.code === 'Space') {
    if (elVideo.paused) {
      elVideo.play()
      playPauseBtnIcon.setAttribute('src', 'https://img.icons8.com/ios-glyphs/24/ffffff/pause--v1.png')
    } else {
      elVideo.pause()
      playPauseBtnIcon.setAttribute('src', 'https://img.icons8.com/ios-glyphs/24/ffffff/play--v1.png')
      elVideo.addEventListener('pause', () => console.log('reklama'))
    }
  }
})