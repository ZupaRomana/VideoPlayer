
export default class InputController {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.element = null;
  }

  run() {
    this.setup();
  }

  setup() {
    this.initializeElement();
    this.renderHtml();
    this.setupEventEmitter();
  }

  initializeElement() {
    this.element = document.createElement('input');
    this.element.setAttribute('id', 'search-movie-input');
  }

  renderHtml() {
    this.parentElement.appendChild(this.element);
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