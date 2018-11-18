import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

$(document).foundation();

import vhCheck from 'vh-check';
const vhTest = vhCheck();

import {TweenLite, ScrollToPlugin, Power4} from 'gsap/all';
const plugins = [ScrollToPlugin, Power4];

const $scrollToElements = $('[data-scroll-to]');
$scrollToElements.click(function(e) {
  e.preventDefault();
	TweenLite.to(window, 1, { scrollTo: $(this).attr('href'), offsetY: 200, ease: Power4.easeOut});
});
