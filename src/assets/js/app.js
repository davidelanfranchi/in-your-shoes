import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

// import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

// $(document).foundation();

import vhCheck from 'vh-check';
const vhTest = vhCheck();

import {TweenLite, TimelineLite, ScrollToPlugin, Power4} from 'gsap/all';
const gsap_references = [TweenLite, TimelineLite, ScrollToPlugin, Power4];

const $scrollToElements = $('[data-scroll-to]');
$scrollToElements.click(function(e) {
  e.preventDefault();
  TweenLite.to(window, 1.5, {
    scrollTo: $(this).attr('href'),
    offsetY: 200,
    ease: Power4.easeOut
  });
});

import contactPanel from './modules/contactPanel';
const contact_panel = new contactPanel();

import Shapes from './modules/Shapes';
const shapes = new Shapes();

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

$(window).on('load', () => {
  loadingTl.play();
});
