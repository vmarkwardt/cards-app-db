import { createEl } from './utils';
import { log } from 'util';

export class Card {
  //
  constructor({ card, target, onDelete }) {
    this.el = createEl({
      className: 'card-layout',
      type: 'section',
      target: target
    });

    this.headingEl = createEl({
      className: 'card-heading fontweight bordershape',
      type: 'h2',
      target: this.el,
      innerHTML: card.title
    });
    this.bookmarkEl = createEl({
      className: `card-bookmark ${card.isBookmarked ? 'active' : ''}`,
      type: 'button',
      target: this.el,
      onClick: (event) => this.toggleOnClick(event, this)
    });
    this.contentEl = createEl({
      className: 'card-content',
      type: 'p',
      target: this.el,
      innerHTML: card.description
    });
    this.deleteEl = createEl({
      className: 'card__btn--delete',
      type: 'button',
      target: this.el,
      innerHTML: 'delete card',
      onClick: () => onDelete(card)
    });
  }

  toggleOnClick(event, obj) {
    event.target.classList.toggle('active');
    // todo handler durchreichen, der mit Server sync / patch
  }
}
