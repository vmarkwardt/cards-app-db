import { createEl, getAllEl, getEl } from './utils';
import { Button } from './Button';
import { log } from 'util';

export class Navigation {
  constructor(onClick) {
    this.buttonList = [
      {
        name: 'home',
        classes: 'nav__button fas fa-home nav__button--page-card-list active',
        //onClick: (event) => this.navCardOnClick(event)
        onClick: (event) => onClick(event, 'page-card-list')
      },
      {
        name: 'create',
        classes: 'nav__button fas fa-folder-plus nav__button--page-create',
        onClick: (event) => onClick(event, 'page-create')
      },
      {
        name: 'profile',
        classes: 'nav__button fas fa-user-circle nav__button--page-profile',
        onClick: (event) => onClick(event, 'page-profile')
      },
      {
        name: 'settings',
        classes: 'nav__button fas fa-cog nav__button--page-settings',
        onClick: (event) => onClick(event, 'page-settings')
      }
    ];

    this.el = createEl({
      className: 'footer-layout',
      type: 'footer',
      target: document.body,
      innerHTML: this.innerHTML
    });

    this.navEl = createEl({
      className: '',
      type: 'nav',
      target: this.el,
      innerHTML: ''
    });

    this.buttonList.forEach(
      (button) =>
        new Button({
          classes: button.classes,
          target: this.navEl,
          onClick: button.onClick
        })
    );
  }

  update(activePage) {
    const buttonElList = getAllEl('.nav__button');
    buttonElList.forEach((navButton) => navButton.classList.remove('active'));
    getEl(`.nav__button--${activePage}`, this.el).classList.add('active');
  }
}
