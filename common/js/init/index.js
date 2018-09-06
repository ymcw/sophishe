const Hover = require('js-util/Hover.js');
const Renderer = require('../modules/common/Renderer').default;
const loadContentImgs = require('../modules/common/loadContentImgs').default;
const SmoothScrollManager = require('../modules/smooth_scroll_manager/SmoothScrollManager').default;
const AnchorLink = require('../modules/smooth_scroll_manager/AnchorLink').default;
const Accordion = require('../modules/Accordion').default;

const modules = {
  renderer: new Renderer(),
  scrollManager: new SmoothScrollManager()
}
const elmAnchorLink = document.querySelectorAll('.js-anchor-link');
const elmHover = document.querySelectorAll('.js-hover');
const elmAccordion = document.querySelectorAll('.js-accordion');
const accordions = [];

modules.scrollManager.modules = modules;

export default async function() {
  for (var i = 0; i < elmAnchorLink.length; i++) {
    new AnchorLink(elmAnchorLink[i], modules.scrollManager);
  }
  for (var i = 0; i < elmHover.length; i++) {
    new Hover(elmHover[i]);
  }
  for (var i = 0; i < elmAccordion.length; i++) {
    accordions[i] = new Accordion(elmAccordion[i], modules.scrollManager);
  }

  modules.scrollManager.scrollNext = () => {
  }
  modules.scrollManager.resizeNext = () => {
    for (var i = 0; i < accordions.length; i++) {
      accordions[i].resize();
    }
  }
  modules.renderer.render = () => {
    modules.scrollManager.render();
  }

  await loadContentImgs(document);
  await modules.scrollManager.start();
  modules.renderer.start();
}
