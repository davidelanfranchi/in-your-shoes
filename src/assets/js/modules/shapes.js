import {TweenLite, TimelineLite, Expo} from 'gsap/all';
import * as basicScroll from 'basicscroll';
import debounce from 'lodash.debounce';

export default class Shapes {
  constructor() {
    this.init();
  }

  init() {
    // console.log('Shapes init');

    const bsInstances = [];
    document.querySelectorAll('.transformed-shape').forEach((elem, i) => {
      bsInstances.push(
        basicScroll.create({
          elem: elem,
          from: 'middle-bottom',
          to: 'bottom-top',
          direct: true,
          props: {
            '--ty': {
              from: '-100px',
              to: '100px'
            },
            '--r': {
              from: '0',
              to: '.5turn'
            },
            '--s': {
              from: '.5',
              to: '1.2'
            }
          }
        })
      );
    });
    document.querySelectorAll('.transformed-shape-2').forEach((elem, i) => {
      bsInstances.push(
        basicScroll.create({
          elem: elem,
          from: 'middle-bottom',
          to: 'bottom-top',
          direct: true,
          props: {
            '--s': {
              from: '2',
              to: '.5'
            }
          }
        })
      );
    });

    document.querySelectorAll('.transformed-shape-3').forEach((elem, i) => {
      bsInstances.push(
        basicScroll.create({
          elem: elem,
          from: 'middle-bottom',
          to: 'bottom-top',
          direct: true,
          props: {
            '--ty': {
              from: '-100px',
              to: '100px'
            }
          }
        })
      );
    });

    bsInstances.forEach(instance => {
      instance.start();
    });

    $(window).on(
      'resize',
      debounce(function() {
        bsInstances.forEach(instance => {
          instance.calculate();
          instance.update();
        });
      }, 150)
    );

    this.bindEvents();
  }

  bindEvents() {}
}
