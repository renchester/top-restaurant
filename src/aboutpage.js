'use strict';

export default function displayAbout(e) {
  if (e.target !== document.querySelector('.nav-link.link-about')) return;

  document.querySelector('#content').innerHTML = `
  
     <div class="nav-bar">
        <div class="coco-logo">
          <img src="img/coco-logo.png" alt="Coco Ichibanya Logo" />
          <p class="coco-logo-name">CURRY HOUSE CoCo ICHIBANYA</p>
        </div>
        <div class="nav-links">
          <div class="nav-link link-home">Home</div>
          <div class="nav-link link-menu">Menu</div>
          <div class="nav-link link-about">About</div>
        </div>
      </div>
    </div>

    <div class="about-info-container">
      <p class="about-info main">
        We will provide our curry rice,a dish loved by the Japanese for so long,
        beyond the border.
      </p>
      <p class="about-info history">
        The "CURRY HOUSE CoCo ICHIBANYA" started from 3 shops surrounded by rice
        fields in the suburb area of Nagoya, in 1978. With our customer first
        spirit, we have been supported by many customers for 40 years until now,
        and in 2004, we were able to increase our shops up to 1,000. Today,
        CoCoICHI has expanded overseas to such as Hawaii, Shanghai, Bangkok,
        Hong Kong, and Los Angeles, and is continuing to be loved by the local
        customers.
      </p>
      <div class="about-info overlay"></div>
    </div>

    <div class="content-wrapper">
     <div class="shops">
        <p class="head-label shops-label">About the shops</p>
        <div class="shops-links">
          <div class="shops-link lead">
            <img src="img/coco-shop-small.png" alt="CoCo Ichibanya Store" />
            CoCo ICHIBANYA, a specialty shop for curry rice in Japan.
          </div>
          <div class="shops-link others">See overseas shops here</div>
          <div class="shops-link company-info">
            ICHIBANYA CO., LTD. Company Information
          </div>
        </div>
      </div>
    </div>
    </div>

    <footer>
      <p class="footer-main">CURRY HOUSE CoCo ICHIBANYA (Japanese)</p>
      <p class="footer-cp">
       Copyright ©ICHIBANYA CO., LTD. All
        rights reserved
      </p>
    </footer>
    
    `;
}
