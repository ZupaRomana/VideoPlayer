
export default class MovieController {
  constructor(movie, parentElement) {
    this.movie = movie;
    this.parentElement = parentElement;
    this.element = null;
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
    let video;
    if (this.movie.url) {
      video = document.createElement('video');
      video.setAttribute('src', this.movie.url);
    } else {
      video = document.createElement('section');
      video.innerHTML = 'Video not found';
    }
    this.element.appendChild(video);
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