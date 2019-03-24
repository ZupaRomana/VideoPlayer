
import InputController from './input-controller.js';
import MoviesListController from './movies-list-controller.js';
import MovieController from './movie-controller.js';

export default class MainController {
  constructor(service, parentElement) {
    this.service = service;
    this.parentElement = parentElement;
    this.moviesListController = null;
    this.movies = null;
    this.element = null;
  }

  run() {
    this.initializeMovies();
    this.initializeElement();
    this.buildChildrenHTMLElements();
    this.render();
    this.registerEventListeners();
  }

  initializeMovies() {
    this.movies = this.service.getMovies();
  }

  initializeElement() {
    this.element = document.createElement('main');
    this.element.setAttribute('class', 'container');
  }

  render() {
    this.parentElement.appendChild(this.element);
  }

  buildChildrenHTMLElements() {
    this.buildInputController();
    this.createMoviePlaceholder();
    this.buildMoviesListController();
  }

  buildInputController() {
    const inputController = new InputController(this.element);
    inputController.run();
  }

  createMoviePlaceholder() {
    const moviePlaceholder = document.createElement('span');
    moviePlaceholder.setAttribute('id', 'movie-placeholder');
    this.element.appendChild(moviePlaceholder);
  }

  buildMoviesListController() {
    this.moviesListController = new MoviesListController(this.element, this.movies);
    this.moviesListController.run();
  }

  registerEventListeners() {
    this.element.addEventListener('input-change', (e) => this.handleInputChange(e.detail));
    this.element.addEventListener('movie-selected', (e) => this.handleMovieSelection(e.detail));
  }

  handleInputChange(input) {
    this.moviesListController.reloadResults(input);
  }

  handleMovieSelection(movie) {
    this.clearMoviePlaceholder();
    this.createMovieController(movie);
  }

  clearMoviePlaceholder() {
    const placeHolder = document.getElementById('movie-placeholder');
    while (placeHolder.firstChild) {
      placeHolder.removeChild(placeHolder.firstChild);
    }
  }

  createMovieController(movie) {
    const placeHolder = document.getElementById('movie-placeholder');
    const movieController = new MovieController(movie, placeHolder);
    movieController.run();
  }
}