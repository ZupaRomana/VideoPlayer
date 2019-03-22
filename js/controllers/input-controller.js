
export default class InputController {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.element = null;
  }

  run() {
    this.setup();
  }

  setup() {
    this.renderHtml();
    this.initializeElement();
    this.setupEventEmitter();
  }

  renderHtml() {
    this.parentElement.innerHTML = `<input id="search-movie-input">`
  }

  initializeElement() {
    this.element = document.getElementById('search-movie-input');
  }

  setupEventEmitter() {
  }
}