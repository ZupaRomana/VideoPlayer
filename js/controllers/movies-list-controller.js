
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
    this.filterMovies('');
    this.renderHtml();
  }

  initializeElement() {
    this.element = document.createElement('dl');
    this.element.setAttribute('id', 'movie-list');
  }

  filterMovies(input) {
    this.movies.filter(movie => movie.titleOrDescriptionIncludes(input.toUpperCase())).forEach(movie => {
      const titleElement = document.createElement('dt');
      titleElement.innerText = movie.title;

      const descriptionElement = document.createElement('dd');
      descriptionElement.innerText = movie.description;

      this.element.appendChild(titleElement);
      this.element.appendChild(descriptionElement);
    });
  }

  renderHtml() {
    this.parentElement.appendChild(this.element);
  }

  refresh(input) {
    this.clearParent();
    this.initializeElement();
    this.filterMovies(input);
    this.renderHtml();
  }

  clearParent() {
    while (this.element.firstChild) {
      this.element.removeChild(this.element.firstChild);
    }
  }
}