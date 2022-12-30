'use babel';

export default class Deedeegyolopackage11111View {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('deedeegyolopackage11111');

    // Create message element
    const message = document.createElement('div');
    message.textContent = 'The Deedeegyolopackage11111 package is Alive! It\'s ALIVE!';
    message.classList.add('message');
    this.element.appendChild(message);
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

}
