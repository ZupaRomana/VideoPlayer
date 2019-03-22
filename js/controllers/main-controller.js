
import InputController from './input-controller.js';

export default class MainController {
  constructor(service, parentElement) {
    this.service = service;
    this.parentElement = parentElement;
    this.movies = null;
    this.element = null;
  }

  run() {
    this.setup();
    this.buildChildren();
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
  }

  buildInputController() {
    const inputController = new InputController(this.element);
    inputController.run();
  }
}