import displayHome from './displayHome';
import logo from './img/curry-logo.png';
import githubIcon from './img/github-icon.png';
import './style.css';

const displayController = (function () {
  const container = document.querySelector('#content');

  function renderHeader() {
    const headerEl = document.createElement('header');

    headerEl.innerHTML = `
      <div class="header-logo">
        <div class="logo-wrapper">
            <img src="${logo}" alt="curry-house-logo" class="header-img"/>
            <span class="logo-text">カレー屋</span>
        </div>
        <span class="header-title">KARI HOUSE Manila</span> 
      </div>
      <nav class="nav-bar">
        <ul class="nav-links">
          <li class="nav-link link--home">Home</li>
          <li class="nav-link link--about">About</li>
          <li class="nav-link link--menu">Menu</li>
        </ul>
      </nav>`;

    return headerEl;
  }

  function renderFooter() {
    const footerEl = document.createElement('footer');

    footerEl.innerHTML = `
      <div class="footer-main">
        <p class="footer-title">KARI HOUSE Manila</p>
        <p class="footer-copyright">
          Copyright ©KARI HOUSE CO., LTD. All rights reserved
        </p>
      </div>
      <ul class="footer-links">
        <li class="footer-link">Terms of Use</li>
        <li class="footer-link">Legacy</li>
        <li class="footer-link">Service</li>
      </ul>
      <div class="footer-dev">
        <img src="${githubIcon}" width="20" class="footer-img" alt="Github icon" />
        <a
        href="https://github.com/renchester"
        target="_blank"
        class="footer-link--github"
        ><p class="footer-desc">Developed by Renchester Ramos</p></a>
      </div>
      `;

    return footerEl;
  }

  function renderPage(page) {
    clearAll();

    console.log(page);

    container.appendChild(renderHeader());
    container.appendChild(page);
    container.appendChild(renderFooter());

    addEvents();
  }

  function clearAll() {
    container.innerHTML = '';
  }

  function addEvents() {
    document
      .querySelector('.nav-link.link--home')
      .addEventListener('click', () =>
        renderPage(displayHome.renderHomeContent()),
      );
  }

  return {
    renderPage,
  };
})();

const divEx = document.createElement('div');

displayController.renderPage(divEx);
