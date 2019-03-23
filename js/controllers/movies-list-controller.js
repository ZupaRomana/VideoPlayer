
export default class MoviesListController {
  constructor(parentElement, movies) {
    this.parentElement = parentElement;
    this.movies = movies;
    this.element = null;
  }

  run() {
    this.setup();
  }

  setup() {
    this.initializeElement();
    this.filterMovies();
    this.renderHtml();
  }

  initializeElement() {
    this.element = document.createElement('dl');
    this.element.setAttribute('id', 'movie-list');
  }

  filterMovies() {
  }

  renderHtml() {
    this.parentElement.appendChild(this.element);
  }
}