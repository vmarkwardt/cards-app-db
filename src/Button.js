import { createEl } from './utils';

export class Button {
  constructor({ classes, target, onClick }) {
    this.innerHTML = '';
    this.el = createEl({
      className: classes,
      type: 'button',
      target: target,
      innerHTML: this.innerHTML
    });

    this.el.addEventListener('click', onClick);
  }
}
