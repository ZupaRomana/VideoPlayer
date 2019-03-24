
export default class MoviesListController {
  constructor(parentElement, movies) {
    this.parentElement = parentElement;
    this.movies = movies;
    this.element = null;
  }

  run() {
    this.initializeElement();
    this.filterMovies('');
    this.render();
  }

  initializeElement() {
    this.element = document.createElement('dl');
    this.element.setAttribute('id', 'movie-list');
    this.element.setAttribute('class', 'list-group');
  }

  filterMovies(input) {
    this.movies.filter(movie => movie.titleOrDescriptionIncludes(input.toUpperCase())).forEach(movie => {
      const titleElement = this.createTitleElement(movie);
      const descriptionElement = this.createDescriptionElement(movie);
      this.element.appendChild(titleElement);
      this.element.appendChild(descriptionElement);
    });
  }

  createTitleElement(movie) {
    const titleElement = document.createElement('dt');
    titleElement.setAttribute('class', 'list-group-item bg-info');
    titleElement.innerText = movie.title;
    titleElement.addEventListener('mouseout', () => titleElement.innerText = movie.title);
    titleElement.addEventListener('mouseover', () => titleElement.innerText = `${movie.title} - Play the movie`);
    titleElement.addEventListener('click', () => {
      const event = new CustomEvent('movie-selected', { detail: movie });
      this.parentElement.dispatchEvent(event);
    });
    return titleElement;
  }

  createDescriptionElement(movie) {
    const descriptionElement = document.createElement('dd');
    descriptionElement.setAttribute('class', 'list-group-item mb-3');
    descriptionElement.innerText = movie.description;
    return descriptionElement;
  }

  render() {
    this.parentElement.appendChild(this.element);
  }

  reloadResults(input) {
    this.clearParentElement();
    this.filterMovies(input);
  }

  clearParentElement() {
    while (this.element.firstChild) {
      this.element.removeChild(this.element.firstChild);
    }
  }
}