const staticCard = document.querySelector('#card-static');
const dynamicCards = document.querySelectorAll('#card-dynamic');

dynamicCards.forEach((card) => {
  card.addEventListener('mouseenter',function () {
    this.classList.add('accent-background');
    staticCard.classList.remove('accent-background');
  });
  card.addEventListener('mouseleave',function () {
    this.classList.remove('accent-background');
    staticCard.classList.add('accent-background');
  });
})

const priceToggle = document.querySelector('#price-toggle');
const basicPrice  = document.querySelector('#price-basic');
const professionalPrice  = document.querySelector('#price-professional');
const masterPrice  = document.querySelector('#price-master');

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