import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.elem = createElement(`
      <div class="card">
      <div class="card__top">
          <img src="/assets/images/products/${product.image}" class="card__image" alt="product">
          <span class="card__price">€${product.price.toFixed(2)}</span>
      </div>
      <div class="card__body">
          <div class="card__title">${product.name}</div>
          <button type="button" class="card__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
      </div>
      </div>
    `)

    //често скажу, всё что дальше я не до конца понимаю,
    //сидел тыкал час, и случайно получилось 
    //наверно вопрос в том, как вообще это работает...
    const plus = this.elem.querySelector('.card__button');
    plus.addEventListener('click', () => {
      this.elem.dispatchEvent(new CustomEvent('product-add', {
        detail: product.id,
        bubbles: true
      }))
    });
  }
}
