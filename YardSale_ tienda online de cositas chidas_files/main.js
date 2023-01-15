const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburgerButton = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuShopingCart = document.querySelector('.navbar-shopping-cart');
const shoppingCartPreview = document.querySelector('.shoppingCartPreview');
const cardsContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('.product-detail');
const closeProductDetailAside = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click', toggleDesktopMenu);
hamburgerButton.addEventListener('click', toggleMobileMenu);
menuShopingCart.addEventListener('click', toggleCarritoAside);
closeProductDetailAside.addEventListener('click', closeDetailAside);

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartPreview.classList.contains('inactive');
  if(!isAsideClosed){
    shoppingCartPreview.classList.add('inactive')
  }
  closeDetailAside();
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCartPreview.classList.contains('inactive');
  if(!isAsideClosed){
    shoppingCartPreview.classList.add('inactive')
  }
  closeDetailAside();
  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  if (!isMobileMenuClosed) {
      mobileMenu.classList.add('inactive');
    }
  closeDetailAside();
  shoppingCartPreview.classList.toggle('inactive');
}

function toggleProductDetail() {
  const isAsideClosed = shoppingCartPreview.classList.contains('inactive');
  if (!isMobileMenuClosed) {
    shoppingCartPreview.classList.add('inactive');
    }
  productDetail.classList.toggle('inactive');
}

function openProductDetail() {
  shoppingCartPreview.classList.add('inactive');
  productDetail.classList.remove('inactive');
}

function closeDetailAside () {
  productDetail.classList.add('inactive');
}

const productList= [];
productList.push({
  name: 'Bici de ciudad',
  price: 3000,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Bici fixie',
  price: 4000,
  image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
});
productList.push({
  name: 'Bici de montaña',
  price: 6000,
  image: 'https://images.unsplash.com/photo-1618762044398-ec1e7e048bbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJpa2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
});


for (product of productList){
  const productCard = document.createElement('div');
  productCard.classList.add('product-card')
  productCard.addEventListener('click', openProductDetail);

  const productImg = document.createElement('img');
  productImg.setAttribute('src', product.image);
 

  const productInfo = document.createElement('div');
  productInfo.classList.add('product-info')

  const productInfoDiv = document.createElement('div');

  const productPrice = document.createElement('p');
  productPrice.innerText = '$' + product.price;

  const productName = document.createElement('p');
  productName.innerText = product.name;

  productInfoDiv.appendChild(productPrice);
  productInfoDiv.appendChild(productName);


  const productInfoFigure = document.createElement('figure');
  const productImgCart = document.createElement('img');
  productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

  productInfoFigure.appendChild(productImgCart);

  productInfo.appendChild(productInfoDiv);
  productInfo.appendChild(productInfoFigure);

  productCard.appendChild(productImg);
  productCard.appendChild(productInfo);

  cardsContainer.appendChild(productCard);

}
  