export class Range {
  constructor(rangeRoot, min, max) {
    this._rangeElement = rangeRoot;
    this._dualRangeElement = this._rangeElement.querySelector('.range__input');
    this._fromInputElement = this._rangeElement.querySelector('.range__from .text-field__input');
    this._toInputElement = this._rangeElement.querySelector('.range__to .text-field__input');
    this._min = min;
    this._max = max;
    this._from = this._min;
    this._to = this._max;

    noUiSlider.create(this._dualRangeElement, {
      start: [this._from, this._to],
      connect: true,
      step: 1,
      cssPrefix: 'noui-',
      range: {
        min: this._min,
        max: this._max,
      }
    });
  }

  handleEvents() {
    this._dualRangeElement.noUiSlider.on(
      'update',
      this._sliderUpdateHandler,
    );
    this._fromInputElement.addEventListener('change', this._fromChangeHandle);
    this._toInputElement.addEventListener('change', this._toChangeHandle);
  }

  get from() {
    return this._from;
  }

  set from(value) {
    this._dualRangeElement.noUiSlider.set([Number(value), null]);
  }


  get to() {
    return this._to;
  }

  set to(value) {
    this._dualRangeElement.noUiSlider.set([null, Number(value)]);
  }

  _fromChangeHandle = ({ target }) => {
    this.from = target.value === '' ? this._min : target.value;
  };

  _toChangeHandle = ({ target }) => {
    this.to = target.value === '' ? this._max : target.value;
  };

  _sliderUpdateHandler = ([from, to]) => {
    this._from = parseInt(from, 10);
    this._to = parseInt(to, 10);

    if (this._from === this._min) {
      this._fromInputElement.value = '';
    } else {
      this._fromInputElement.value = this._from;
    }

    if (this._to === this._max) {
      this._toInputElement.value = '';
    } else {
      this._toInputElement.value = this._to;
    }
  };
}
