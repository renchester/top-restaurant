import homeView from './homeView';
import aboutView from './aboutView';
import menuView from './menuView';
import shopFrontImg from './img/shop-front-julie-fader.jpeg';
import logo from './img/curry-logo.png';
import githubIcon from './img/github-icon.png';
import './style.css';

const View = (function () {
  const container = document.querySelector('#content');

  function clearAll() {
    container.innerHTML = '';
  }

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

  function renderSection() {
    const sectionEl = document.createElement('section');

    sectionEl.innerHTML = `
      <span class="section-title">About the shops</span>
      <div class="about--grid">
        <div class="about--grid-item-1">
          <div class="grid-item-1--img">
            <img src="${shopFrontImg}" alt="Shop front by Julie Fader"/>
            <caption class="shop-front-caption">
              <a href="https://unsplash.com/@jlfader" target="_blank">
              Julie Fader on Unsplash</a>
            </caption>
          </div>
          <div class="grid-item-1--text">KARI HOUSE Manila, the best curry house in the Philippines</div>
         
        </div>
        <div class="about--grid-item-2">See overseas shops here</div>
        <div class="about--grid-item-3">Company Information</div>
      </div>`;

    return sectionEl;
  }

  function renderFooter() {
    const footerEl = document.createElement('footer');

    footerEl.innerHTML = `
      <div class="footer-main">
        <p class="footer-title">KARI HOUSE Manila</p>
        <p class="footer-copyright">
          Copyright ©KARI HOUSE CO., LTD. For presentation purposes only.
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

  function addEvents() {
    document
      .querySelector('.nav-link.link--home')
      .addEventListener('click', () =>
        renderPage(homeView.renderHomeContent()),
      );

    document
      .querySelector('.nav-link.link--about')
      .addEventListener('click', () =>
        renderPage(aboutView.renderAboutContent()),
      );

    document
      .querySelector('.nav-link.link--menu')
      .addEventListener('click', () =>
        renderPage(menuView.renderMenuContent()),
      );
  }

  function renderPage(page) {
    clearAll();

    container.appendChild(renderHeader());
    container.appendChild(page);
    container.appendChild(renderSection());
    container.appendChild(renderFooter());

    addEvents();
  }

  function init() {
    renderPage(homeView.renderHomeContent());
  }

  return {
    renderHeader,
    renderFooter,
    addEvents,
    clearAll,
    init,
  };
})();

View.init();

export default View;
