import { getLocalStorage, addLocalStorage } from './utils';

export class Model {
  constructor() {
    console.log('creae new Mdoel');
    this.storageName = 'cardList';
    this.cardList = getLocalStorage(this.storageName) || [];
    addLocalStorage(this.cardList, this.storageName);
  }

  async addCard(newCard) {
    console.log('neeu Card an server? ', newCard);
    this.cardList = [newCard, ...this.cardList];
    //addLocalStorage(this.cardList, this.storageName);
    await fetch('http://localhost:3000/cards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCard)
    });
  }

  // instead of localStorage use Server-request
  async getAllCards() {
    //return getLocalStorage(this.storageName);
    try {
      const response = await fetch('http://localhost:3000/cards');
      const json = await response.json();
      //console.log('** getAllCards json? :  ', json);
      return json;
    } catch (error) {
      console.log(error);
    }
  }

  // deleteSingleCard
  async deleteCard(card) {
    try {
      const response = await fetch('http://localhost:3000/cards/' + card.id, {
        method: 'DELETE'
      });
      const json = await response.json();
      return json;
    } catch (error) {
      console.log(error);
    }
  }
}
