import { NavButtonLabel } from '../constants.js';

export class MainNavigation {
  constructor(rootElement) {
    this._headerElement = rootElement;
    this._buttonElement = this._headerElement.querySelector('.header__action--menu');
    this._buttonCaptionElement = this._buttonElement.querySelector('.header__action-caption');
    this._navigationElement = this._headerElement.querySelector('.header__navigation');
    this._opened = this._headerElement.classList.contains('header--navigation-open');
  }

  toggleNavigation() {
    this._opened = !this._opened;
    this._headerElement.classList.toggle('header--navigation-open', this._opened);
    this._buttonCaptionElement.textContent = this._opened
      ? NavButtonLabel.Opened
      : NavButtonLabel.Closed;
  }

  handleEvents() {
    this._buttonElement.addEventListener('click', this.#handleClick);
  }

  #handleClick = (evt) => {
    evt.preventDefault();
    this.toggleNavigation();
  };
}
