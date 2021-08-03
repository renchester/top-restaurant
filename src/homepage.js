'use strict';

import initPage from './initpage';

export default function displayHome(e) {
  if (e.target !== document.querySelector('.nav-link.link-home')) return;

  initPage();
}
