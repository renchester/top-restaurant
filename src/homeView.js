import plateImg from './img/curry-dish-meat.png';

const homeView = (function () {
  function renderHomeContent() {
    const homeContent = document.createElement('div');
    homeContent.classList.add('home-section');
    homeContent.classList.add('content-wrapper');

    homeContent.innerHTML = `
    <main>
      <div class="history">
        <img src="${plateImg}" alt="Background image" class="history-background-img"/>
        <strong class="history-title">Established in 1999</strong>
        <p class="history-desc">
          "KARI HOUSE Manila", known as "KARIMAN", is a chain restaurant
          specializing in Japanese-style curry rice. Many people enjoy making
          their very own KARIMAN curry by customizing the rice portion, spice
          level, and optional toppings coming in nearly 40 varieties. Please
          enjoy our curry, which is very popular with the Filipino & Japanese
          people!
        </p>
      </div>
    </main>`;

    return homeContent;
  }

  return { renderHomeContent };
})();

export default homeView;
