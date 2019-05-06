import { createEl, getEl } from './utils';

export class SettingsPage {
  constructor(target, onDarkmodeChange) {
    this.el = createEl({
      className: 'main__content page-settings hidden',
      type: 'section',
      target,
      innerHTML: `
        <div class="setting marginb10">
          <section class="setting marginb10">
              <h3>Darkmode</h3>
              <div class="input__switch bordershape marginb10">
                  <input class="input__radiobutton" id="darkmode-on" type="radio" name="darkmode"></input>
                  <label class="input__radio-label bordershape" for="darkmode-on">on</label>
                  <input class="input__radiobutton input__radiobutton--on-right" id="darkmode-off" type="radio" name="darkmode" checked></input>
                  <label class="input__radio-label bordershape" for="darkmode-off">off</label>
                  <p class="input__radio-slider bordershape"></p>
              </div>
              <h3>Use mobile Data</h3>
              <div class="input__switch bordershape marginb10">
                  <input class="input__radiobutton" id="mobile-on" type="radio" name="mobile" checked></input>
                  <label class="input__radio-label bordershape input__radio-label bordershape--mobile-on" for="mobile-on">on</label>
                  <input class="input__radiobutton input__radiobutton--on-right" id="mobile-off" type="radio" name="mobile"></input>
                  <label class="input__radio-label bordershape" for="mobile-off">off</label>
                  <p class="input__radio-slider bordershape"></p>
              </div>
          </section>
          <section class="setting__option">

              <label class="setting__option-label" for="setting__option-1">Option 1</label>
              <input class="setting__option-label custom-checkbox" type="checkbox" name="" id="setting__option-1" checked>
              <label class="setting__option-label custom-checkbox-label" for="setting__option-1"></label>
              
              <label class="setting__option-label" for="setting__option-2">Option 2</label>
              <input class="setting__option-label custom-checkbox" type="checkbox" name="" id="setting__option-2" checked>
              <label class="setting__option-label custom-checkbox-label" for="setting__option-2"></label>
              
              <label class="setting__option-label" for="setting__option-3">Option 3</label>
              <input class="setting__option-label custom-checkbox" type="checkbox" name="" id="setting__option-3">
              <label class="setting__option-label custom-checkbox-label" for="setting__option-3"></label>
          </section>
        </div>`
    });

    this.darkmodeOffEl = getEl('#darkmode-off');
    this.darkmodeOnEl = getEl('#darkmode-on');

    this.darkmodeOffEl.addEventListener('click', () => {
      onDarkmodeChange(false);
    });
    this.darkmodeOnEl.addEventListener('click', () => {
      onDarkmodeChange(true);
    });
  }
}
