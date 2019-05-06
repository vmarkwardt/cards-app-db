import { createEl } from './utils';
import { Card } from './Card';

export class CardPage {
  constructor(target, cardList, onDelete) {
    this.cardList = cardList;
    this.onDelete = onDelete;
    this.el = createEl({
      className: 'main__content page-card-list',
      type: 'section',
      target: target
    });

    this.render(this.cardList);
  }

  render(cardList) {
    this.el.innerHTML = '';
    cardList
      .map(
        (card) =>
          new Card({
            card,
            target: this.el,
            onDelete: this.onDelete
          })
      )
      .map((card) => card.el)
      .forEach((cardEl) => this.el.appendChild(cardEl));
  }
}
