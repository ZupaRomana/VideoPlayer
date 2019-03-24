
export default class MovieController {
  constructor(movie, parentElement) {
    this.movie = movie;
    this.parentElement = parentElement;
    this.element = null;
    this.video = null;
  }

  run() {
    this.initializeElement();
    if (this.video.tagName === 'VIDEO') {
      this.registerVideoControls();
    }
    this.renderHtml();
  }

  initializeElement() {
    this.element = document.createElement('div');
    this.initializeVideo();
    this.initializeTitle();
    this.initializeDescription();
  }

  initializeVideo() {
    if (this.movie.url) {
      this.video = document.createElement('video');
      this.video.setAttribute('src', this.movie.url);
    } else {
      this.video = document.createElement('section');
      this.video.innerHTML = 'Video not found';
    }
    this.element.appendChild(this.video);
  }

  initializeTitle() {
    const section = document.createElement('section');
    section.innerText = this.movie.title;
    this.element.appendChild(section);
  }

  initializeDescription() {
    const section = document.createElement('section');
    section.innerText = this.movie.description;
    this.element.appendChild(section);
  }

  registerVideoControls() {
    const controls = document.createElement('div');
    const play = document.createElement('button');
    const pause = document.createElement('button');
    const speedDown = document.createElement('button');
    const frameForward = document.createElement('button');
    const frameBackward = document.createElement('button');

    play.innerText = 'PLAY';
    pause.innerText = 'PAUSE';
    speedDown.innerText = 'SPEED DOWN';
    frameForward.innerText = 'FRAME +';
    frameBackward.innerText = 'FRAME -';

    play.addEventListener('click', () => this.handlePlay());
    pause.addEventListener('click', () => this.handlePause());
    speedDown.addEventListener('click', () => this.handleSpeedDown());
    frameForward.addEventListener('click', () => this.handleFrameForward());
    frameBackward.addEventListener('click', () => this.handleFrameBackward());

    [play, pause, speedDown, frameForward, frameBackward].forEach(button => controls.appendChild(button));
    this.element.appendChild(controls);
  }

  handlePlay() {
    
  }

  handlePause() {

  }

  handleSpeedDown() {

  }

  handleFrameForward() {

  }

  handleFrameBackward() {

  }

  renderHtml() {
    this.parentElement.appendChild(this.element);
  }
}