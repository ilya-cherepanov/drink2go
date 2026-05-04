export class Carousel {
  _currentSlideIdx = 0;

  constructor(rootElement, backgrounds) {
    this._carouselElement = rootElement;
    this._backgrounds = backgrounds;
    this._lastSlideIdx = this._backgrounds.length - 1;

    this._buttonPrev = rootElement.querySelector('.carousel__button--prev');
    this._buttonNext = rootElement.querySelector('.carousel__button--next');
    this._switchButtons = rootElement.querySelectorAll('.carousel__switch-button');
    this._slideButtons = rootElement.querySelectorAll('.carousel__slides .slide__button');
  }

  handleEvents() {
    this._buttonPrev.disabled = true;
    this._buttonNext.addEventListener('click', this._nextClickHandler);

    this._switchButtons.forEach((button, idx) => {
      button.addEventListener('click', (evt) => this._switchClickHandler(evt, idx));
    });
  }

  get currentSlide() {
    return this._currentSlideIdx;
  }

  set currentSlide(slide) {
    slide = Number(slide);
    slide = Number.isNaN(slide) ? 0 : slide;
    slide = Math.max(0, Math.min(slide, this._lastSlideIdx));

    if (this._currentSlideIdx !== 0 && slide === 0) {
      this._buttonPrev.removeEventListener('click', this._prevClickHandler);
      this._buttonPrev.disabled = true;
    } else if (this._currentSlideIdx !== this._lastSlideIdx && slide === this._lastSlideIdx) {
      this._buttonNext.removeEventListener('click', this._nextClickHandler);
      this._buttonNext.disabled = true;
    }

    if (this._currentSlideIdx === 0 && slide !== 0) {
      this._buttonPrev.addEventListener('click', this._prevClickHandler);
      this._buttonPrev.disabled = false;
    } else if (this._currentSlideIdx === this._lastSlideIdx && slide !== this._lastSlideIdx) {
      this._buttonNext.addEventListener('click', this._nextClickHandler);
      this._buttonNext.disabled = false;
    }

    this._switchButtons[this._currentSlideIdx].classList.remove('carousel__switch-button--active');
    this._slideButtons[this._currentSlideIdx].tabIndex = -1;

    this._currentSlideIdx = slide;
    this._carouselElement.style.setProperty('--current-slide', this._currentSlideIdx);
    this._carouselElement.style.setProperty(
      '--background-color',
      this._backgrounds[this._currentSlideIdx],
    );
    this._switchButtons[this._currentSlideIdx].classList.add('carousel__switch-button--active');
    this._slideButtons[this._currentSlideIdx].tabIndex = 0;
  }

  _prevClickHandler = (evt) => {
    evt.preventDefault();
    this.currentSlide -= 1;
  };

  _nextClickHandler = (evt) => {
    evt.preventDefault();
    this.currentSlide += 1;
  };

  _switchClickHandler = (evt, idx) => {
    evt.preventDefault();
    this.currentSlide = idx;
  };
}
