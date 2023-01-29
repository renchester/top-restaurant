import backgroundImg from './img/shop-ceiling-maricar-limjoco.jpeg';

const aboutView = (function () {
  function renderAboutContent() {
    const aboutEl = document.createElement('main');
    aboutEl.classList.add('about-section');
    aboutEl.classList.add('content-wrapper');

    aboutEl.innerHTML = `
     
        <div class="img-overlay"></div>
        <img src="${backgroundImg}" alt="Shop ceiling by Maricar Limjoco" />
        <span class="shop-front-caption">
          <a href="https://unsplash.com/@icalimjoco target="_blank" >
            Maricar Limjoco on Unsplash</a>
        </span>
    
    
        <h1 class="about-title">
          We have provided our curry rice, a dish loved by the Japanese for so long, beyond the border.
        </h1>
        <p class="about-desc">
          The KARI HOUSE started from 3 shops surrounded by rice fields in the suburb area of Nagoya, in 1999. With our customer first spirit, we have been supported by many customers for 20 years until now, and in 2012, we were able to increase our shops up to 1,000. Today, KARI HOUSE has expanded overseas to such as Hawaii, Shanghai, Bangkok, Hong Kong, and Los Angeles, and is continuing to be loved by the local customers.
        </p>
    `;

    return aboutEl;
  }

  return {
    renderAboutContent,
  };
})();

export default aboutView;
