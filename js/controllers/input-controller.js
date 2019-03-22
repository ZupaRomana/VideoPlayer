
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
    this.element.addEventListener('keyup', () => {
      const event = this.createEvent();
      this.parentElement.dispatchEvent(event);
    });
  }

  createEvent() {
    return new CustomEvent('input-change', { detail: this.element.value.toUpperCase() });
  }
}