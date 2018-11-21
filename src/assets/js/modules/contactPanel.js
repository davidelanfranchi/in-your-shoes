import {TweenLite, TimelineLite, Expo} from 'gsap/all';

export default class contactPanel {
  constructor() {
    this.$contactPanel = $('.contactpanel');
    this.$mainCta = $('.maincta');
    this.$contactPanelToStaggerElements1 = this.$contactPanel.find(
      '.-to-stagger-1'
    );
    this.$contactPanelToStaggerElements2 = this.$contactPanel.find(
      '.-to-stagger-2'
    );
    this.$contactPanelToggles = $('[data-contactpanel-toggle]');
    this.isVisible = false;

    this.init();
  }

  init() {
    console.log('contactPanel init');

    this.tl = new TimelineLite({
      paused: true,
      onComplete: () => {}
    });
    this.tl.from(this.$contactPanel, 0.6, {x: '-100%', ease: Expo.easeOut});
    // this.tl.staggerFrom(
    // 	this.$contactPanelToStaggerElements1,
    // 	0.3,
    // 	{ opacity: 0, y: 10 },
    // 	0.1
    // );
    // this.tl.staggerFrom(
    // 	this.$contactPanelToStaggerElements2,
    // 	0.6,
    // 	{ opacity: 0, y: 10 },
    // 	0.1
    // );
    // this.tl.from(this.$contactPanelCloseElement, 0.6, { scale: 0, y: 10 });

    this.bindEvents();
  }

  showContactPanel() {
    this.isVisible = true;
    this.$mainCta.addClass('is-state-2');
    this.tl.timeScale(1);
    this.tl.play();
  }

  hideContactPanel() {
    this.isVisible = false;
    this.$mainCta.removeClass('is-state-2');
    this.tl.timeScale(2);
    this.tl.reverse();
  }

  bindEvents() {
    this.$contactPanelToggles.click(() => {
      if (this.isVisible) {
        this.hideContactPanel();
      } else {
        this.showContactPanel();
      }
    });

    // close if click outside element

    $(document).on('click', e => {
      if (
        this.isVisible &&
        !$(e.target).closest('.contactpanel').length &&
        !$(e.target).closest('.maincta').length
      ) {
        this.hideContactPanel();
      }
    });
  }
}
