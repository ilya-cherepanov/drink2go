import { MainNavigation } from './components/navigation.js';
import { Price } from './constants.js';

const navigation = new MainNavigation();
navigation.handleEvents();

const dualRange = document.querySelector('.dual-range');
noUiSlider.create(dualRange, {
  start: [0, 900],
  connect: true,
  cssPrefix: 'noui-',
  range: {
    min: Price.Min,
    max: Price.Max,
  }
});
