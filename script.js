const buttonPlayPause = document.getElementById('play-pause');
const audioChapter = document.getElementById('audio-chapter');
const buttonPrevious = document.getElementById('previous');
const buttonNext = document.getElementById('next');
const chapterName = document.getElementById('chapter');

const chapterNumber = 10;
let playingTrack = false;
let currentChapter = 1;

function playTrack() {
  audioChapter.play();
  buttonPlayPause.classList.remove('bi-play-circle-fill');
  buttonPlayPause.classList.add('bi-pause-circle-fill');
}

function pauseTrack() {
  audioChapter.pause();
  buttonPlayPause.classList.add('bi-play-circle-fill');
  buttonPlayPause.classList.remove('bi-pause-circle-fill');
}

function playOrPause() {
  if (playingTrack === false) {
    playTrack();
    playingTrack = true;
  } else {
    pauseTrack();
    playingTrack = false;
  }
}

function changeTrackName() {
  chapterName.innerText = 'Capítulo ' + currentChapter;
}

function nextTrack() {
  if (currentChapter === chapterNumber) {
    currentChapter = 1;
  } else {
    currentChapter = currentChapter + 1
  }
  audioChapter.src = './books/dom-casmurro/' + currentChapter + '.mp3';
  playTrack();
  playingTrack = true;
  changeTrackName();
}

function previousTrack() {
  if (currentChapter === 1) {
    currentChapter = chapterNumber;
  } else {
    currentChapter = currentChapter - 1
  }
  audioChapter.src = './books/dom-casmurro/' + currentChapter + '.mp3';
  playTrack();
  playingTrack = true;
  changeTrackName();
}



buttonPlayPause.addEventListener('click', playOrPause);
buttonNext.addEventListener('click', nextTrack);
buttonPrevious.addEventListener('click', previousTrack);
