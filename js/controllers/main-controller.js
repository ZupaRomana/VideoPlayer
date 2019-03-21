
import FormController from './form-controller.js';

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
    this.renderHtml();
    this.initializeElement();
  }

  initializeMovies() {
    this.movies = this.service.getMovies();
  }

  renderHtml() {
    this.parentElement.innerHTML = `<main id="main"></main>`;
  }

  initializeElement() {
    this.element = document.getElementById('main');
  }

  buildChildren() {
    this.buildFormController();
  }

  buildFormController() {
    const formController = new FormController(this.element);
    formController.run();
  }
}