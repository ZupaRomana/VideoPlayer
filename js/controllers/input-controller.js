
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
  }

  initializeElement() {
  }

  setupEventEmitter() {
  }
}