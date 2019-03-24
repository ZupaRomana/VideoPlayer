
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
    this.setup();
    this.buildChildren();
    this.registerEventListeners();
  }

  setup() {
    this.initializeMovies();
    this.initializeElement();
    this.renderHtml();
  }

  initializeMovies() {
    this.movies = this.service.getMovies();
  }

  initializeElement() {
    this.element = document.createElement('main');
    this.element.setAttribute('class', 'container');
  }

  renderHtml() {
    this.parentElement.appendChild(this.element);
  }

  buildChildren() {
    this.buildInputController();
    this.buildMoviesListController();
    this.createMoviePlaceholder();
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
    this.moviesListController.refresh(input);
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