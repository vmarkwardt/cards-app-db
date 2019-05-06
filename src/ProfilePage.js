import { createEl } from './utils';

export class ProfilePage {
  constructor(target) {
    this.el = createEl({
      type: 'section',
      className: 'main__content page-profile hidden',
      target,
      innerHTML: `
      <section>
      <div class="profile">
          <img
            class="profile__img"
            src="https://images.unsplash.com/photo-1502877828070-33b167ad6860?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="portrait"
            />
            <div class="profile__user">
              <span> Amanda </span>
              <span class="profile__user--city"> London </span>
            </div>
          </div>
          <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut aperiam
          architecto, recusandae vero dolores harum distinctio.
          </p>
        </section>
        <section>
          <h3 class="fontweight">About me</h3>
          <ul class="tag-list fontweight">
            <li class="bordershape">beetroot</li>
            <li class="bordershape">gram</li>
            <li class="bordershape">watercress</li>
            <li class="bordershape">bean</li>
            <li class="bordershape">fava</li>
            <li class="bordershape">carrot</li>
          </ul>
        </section>
      `
    });
  }
}
