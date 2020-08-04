import localStorageService from './localStorageService';

class CartStorage {
  saveProducts = (products) => {
    products = JSON.stringify(products);
    localStorageService.set('shopping-cart', products);
  }

  removeProducts = () => {
    localStorageService.remove('shopping-cart');
  }

  getProducts = () => {
    return JSON.parse(localStorageService.get('shopping-cart'));
  }
}

export default new CartStorage();