/**
 * Creates an HTMLElement
 * Takes an option object where you can specify
 * optional parameters
 * @param {Object} options
 * @returns HTMLElement
 */

export function createEl({
  className = '',
  type = 'div',
  target = document.body,
  position = 'beforeend',
  innerHTML = '',
  onClick
}) {
  const el = document.createElement(type);
  el.className = className;
  el.innerHTML = innerHTML;
  target.insertAdjacentElement(position, el);
  el.addEventListener('click', onClick);
  return el;
}

export function getEl(selector, target = document) {
  return target.querySelector(selector);
}

export function getAllEl(selector, target = document) {
  return target.querySelectorAll(selector);
}

export function getLocalStorage(storageName) {
  return JSON.parse(localStorage.getItem(storageName));
}

export function addLocalStorage(entry, storageName) {
  localStorage.setItem(storageName, JSON.stringify(entry));
}
