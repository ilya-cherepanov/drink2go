import { MainNavigation } from './components/navigation.js';
import { Range } from './components/range.js';
import { DEFAULT_MAX_PRICE, Price } from './constants.js';

const navigation = new MainNavigation();
navigation.handleEvents();

const rangeElement = document.querySelector('.range');
const range = new Range(rangeElement, Price.Min, Price.Max);
range.handleEvents();
range.to = DEFAULT_MAX_PRICE;
