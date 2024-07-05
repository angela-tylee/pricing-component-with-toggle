# Frontend Mentor - Pricing component with toggle solution

This is a solution to the [Pricing component with toggle challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pricing-component-with-toggle-8vPwRMIC). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Pricing component with toggle solution](#frontend-mentor---pricing-component-with-toggle-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Control the toggle with mouse/trackpad.


### Screenshot

<img width="900" alt="image" src="https://github.com/angela-tylee/pricing-component-with-toggle/assets/145020731/59b320e0-e446-46c1-b5cf-5ae91aec1dbd">
<img width="909" alt="image" src="https://github.com/angela-tylee/pricing-component-with-toggle/assets/145020731/d8459cf4-3b64-4787-baf9-cf681f1635cf">


<img width="247" alt="image" src="https://github.com/angela-tylee/pricing-component-with-toggle/assets/145020731/801e4dc6-3c30-4b27-9e7c-d246457c3cb8">


### Links

- Solution URL: https://github.com/angela-tylee/pricing-component-with-toggle
- Live Site URL: https://angela-tylee.github.io/pricing-component-with-toggle/

## My process

### Built with

- HTML / CSS / JavaScript

### What I learned

- CSS
  - Background Image: combine 2 background images into 1
    ```css
    .background::before {
      background-image: url('./images/bg-bottom.svg');
      background-size: 45vh;
      background-position: bottom left;
      top: 0;
      left: 0;
    }

    .background::after {
      background-image: url('./images/bg-top.svg');
      background-size: 45vh;
      background-position: top right;
      top: 0;
      right: 0;
    }
    ```
  - Toggle button (`input type="checkbox"`)
    ```html
    <div class="toggle-container">
      <span class="toggle-text">Annually</span>
      <label class="toggle">
        <input type="checkbox" id="price-toggle">
        <span class="slider"></span>
      </label>
      <span class="toggle-text">Monthly</span>
    </div>
    ```
    ```css
    input:checked + .slider {
      background: linear-gradient(to right, var(--light-purple), var(--purple));
    }

    input:checked + .slider:before {
      transform: translateX(-26px);
    }
    ```

- JavaScript
  - `mouseenter`/`mouseleave`
    ```javascript
      dynamicCards.forEach((card) => {
      card.addEventListener('mouseenter',function () {
        this.classList.add('accent-background');
      });
      card.addEventListener('mouseleave',function () {
        this.classList.remove('accent-background');
      });
    })
    ```
  - change content with toggle ('change')
    ```javascript
    priceToggle.addEventListener('change', function() {
      if (!this.checked) {
        // Monthly price
        basicPrice.textContent = '19.99';
        professionalPrice.textContent = '24.99';
        masterPrice.textContent = '39.99';
      } else {
        // Annual price
        basicPrice.textContent = '199.99';
        professionalPrice.textContent = '249.99';
        masterPrice.textContent = '399.99';
      }
    });
    ```

### Continued development

 - Control the toggle with keyboard.
