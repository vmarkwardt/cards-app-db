import { createEl } from './utils';

export class Header {
  constructor(target) {
    this.el = createEl({
      className: 'header-heading',
      type: 'header',
      target: target,
      position: 'afterbegin'
    });

    this.heading = createEl({
      className: 'header-title',
      type: 'h1',
      target: this.el,
      innerHTML: 'home'
    });
  }
  update(activePage) {
    let text;
    switch (activePage) {
      case 'page-card-list':
        text = 'list of cards';
        break;

      case 'page-create':
        text = 'create a new card';
        break;

      case 'page-profile':
        text = 'your profile';
        break;

      case 'page-settings':
        text = 'settings';
        break;

      default:
        text = '';
        break;
    }
    this.heading.innerHTML = text;
  }
}
