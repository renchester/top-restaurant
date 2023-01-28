const displayHome = (function () {
  function renderHomeContent() {
    const homeContent = document.createElement('div');
    homeContent.classList.add('content-wrapper');

    homeContent.innerHTML = `
    <main>
      <div class="history">
        <strong class="history-title">Established in 2023</strong>
        <p class="history-desc">
          "KARI HOUSE Manila", known as "KARIMAN", is a chain restaurant
          specializing in Japanese-style curry rice. Many people enjoy making
          their very own KARIMAN curry by customizing the rice portion, spice
          level, and optional toppings coming in nearly 40 varieties. Please
          enjoy our curry, which is very popular with the Filipino & Japanese
          people!
        </p>
      </div>
    </main>

    <section>
      <div class="about--grid">
        <div class="about--grid-item-1">
          KARI HOUSE Manila, the best curry house in the Philippines
        </div>
        <div class="about--grid-item-2">See overseas shops here</div>
        <div class="about--grid-item-3">Company Information</div>
      </div>
    </section>`;

    return homeContent;
  }

  return { renderHomeContent };
})();

export default displayHome;
