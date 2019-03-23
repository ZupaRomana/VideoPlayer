
import InputController from './input-controller.js';
import MoviesListController from './movies-list-controller.js';

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
  }

  renderHtml() {
    this.parentElement.appendChild(this.element);
  }

  buildChildren() {
    this.buildInputController();
    this.buildMoviesListController();
  }

  buildInputController() {
    const inputController = new InputController(this.element);
    inputController.run();
  }

  buildMoviesListController() {
    this.moviesListController = new MoviesListController(this.element, this.movies);
    this.moviesListController.run();
  }

  registerEventListeners() {
    this.element.addEventListener('input-change', (e) => this.moviesListController.refresh(e.detail));
  }
}