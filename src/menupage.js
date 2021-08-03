'use strict';

export default function displayMenu(e) {
  if (e.target !== document.querySelector('.nav-link.link-menu')) return;

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

    <div class="content-wrapper">
      <main class="menu">
        <div class="menu-label-wrapper">
          <p class="head-label menu-label">About the menu</p>
          <p class="sublabel menu-sublabel">
            We offer various toppings such as meat, seafood, and vegetables at
            CURRY HOUSE CoCo ICHIBANAYA.
          </p>
        </div>
        <div class="menu-container">
          <div class="menu-item meat">
            <img src="img/coco-curry-meat.png" alt="Meat Menu" />
            <div class="menu-label">
              <div class="menu-plus-circle"></div>
              Meat Menu
            </div>
          </div>
          <div class="menu-item seafood">
            <img src="img/coco-curry-seafood.png" alt="Seafood Menu" />
            <div class="menu-label">
              <div class="menu-plus-circle"></div>
              Seafood Menu
            </div>
          </div>
          <div class="menu-item vegetable">
            <img src="img/coco-curry-vegetable.png" alt="Vegetable Menu" />
            <div class="menu-label">
              <div class="menu-plus-circle"></div>
              Vegetable Menu
            </div>
          </div>
          <div class="menu-item other">
            <img src="img/coco-curry-other.png" alt="Other Dishes" />
            <div class="menu-label">
              <div class="menu-plus-circle"></div>
              Other Dishes
            </div>
          </div>
          <div class="menu-item kids">
            <img src="img/coco-curry-kids.png" alt="Kid's Menu" />
            <div class="menu-label">
              <div class="menu-plus-circle"></div>
              Kid's Menu
            </div>
          </div>
          <div class="menu-item sides">
            <img src="img/coco-curry-sides.png" alt="Sides Menu" />
            <div class="menu-label">
              <div class="menu-plus-circle"></div>
              Sides Menu
            </div>
          </div>
        </div>
      </main>

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

    <footer>
      <p class="footer-main">CURRY HOUSE CoCo ICHIBANYA (Japanese)</p>
      <p class="footer-cp">
         Copyright ©ICHIBANYA CO., LTD. All
        rights reserved
      </p>
    </footer>
 
    
    
    `;
}
