import $ from 'jquery';
import whatInput from 'what-input';

import vhCheck from 'vh-check';

import {TweenLite, TimelineLite, Power4, Expo} from 'gsap/TweenMax';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

import contactPanel from './modules/contactPanel';
import Shapes from './modules/Shapes';

window.$ = $;

// viewport height

const vhTest = vhCheck();

// scroll to elements

const $scrollToElements = $('[data-scroll-to]');
$scrollToElements.click(function(e) {
  e.preventDefault();
  TweenLite.to(window, 1.5, {
    scrollTo: $(this).attr('href'),
    offsetY: 200,
    ease: Power4.easeOut
  });
});

// Loading overlay

const $loading = $('.loading');
const $loadingLogo = $('.loading__center');
const $navItems = $(
  '.nav__menu-item, .nav__lang-item, .hero__bottom-line, .cta2'
);
const $mainCta = $('.maincta');
const $icons = $('.bal-01-wr, .bal-02-wr, .hang-01-wr');

const loadingTl = new TimelineLite({
  paused: true
});

loadingTl.to($loadingLogo, 0.6, {opacity: 0, y: -500, delay: 0.5});
loadingTl.to($loading, 0.3, {y: '-100%'});
loadingTl.staggerFromTo(
  $navItems,
  0.6,
  {opacity: 0, y: 20},
  {opacity: 1, y: 0},
  0.1
);
loadingTl.from($mainCta, 1, {opacity: 0, y: '200%'}, '-=0.6');
loadingTl.staggerFromTo(
  $icons,
  0.6,
  {opacity: 0, y: 50, scale: 0},
  {opacity: 1, y: 0, scale: 1},
  0.2
);

// custom modules

const contact_panel = new contactPanel();
const shapes = new Shapes();

// start on load

$(window).on('load', () => {
  loadingTl.play();
});

// credits

if (!!window.chrome || !!(browser.isFirefox && support.modifiedConsole)) {
  console.log(
    '%c 👋 https://davidelanfranchi.com ',
    'background: #6cdac1; color: #ffffff; padding:5px;'
  );
}
