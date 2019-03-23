
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
    this.initializeVideo();
    this.initializeTitle();
    this.initializeDescription();
  }

  initializeVideo() {
  }

  initializeTitle() {
  }

  initializeDescription() {
  }

  renderHtml() {
    this.parentElement.appendChild(this.element);
  }
}