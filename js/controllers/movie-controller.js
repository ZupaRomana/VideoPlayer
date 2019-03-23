
export default class MovieController {
  constructor(movie, parentElement) {
    this.movie = movie;
    this.parentElement = parentElement;
    this.element = null;
    this.video = null;
  }

  run() {
    this.initializeElement();
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

  renderHtml() {
    this.parentElement.appendChild(this.element);
  }
}