import { Carousel } from './components/carousel.js';
import { MainNavigation } from './components/navigation.js';
import { Range } from './components/range.js';
import { CAROUSEL_BACKGROUNDS, DEFAULT_MAX_PRICE, Price } from './constants.js';

const headerElement = document.querySelector('.header');
const navigation = new MainNavigation(headerElement);
navigation.handleEvents();

const rangeElement = document.querySelector('.range');
const range = new Range(rangeElement, Price.Min, Price.Max);
range.handleEvents();
range.to = DEFAULT_MAX_PRICE;

const carouselElement = document.querySelector('.carousel');
const carousel = new Carousel(carouselElement, CAROUSEL_BACKGROUNDS);
carousel.handleEvents();
