import { ApiClient } from './ApiClient';

class ProductApi {
  api;
  constructor() {
    this.api = new ApiClient();
  }

  getAllProducts(id) {
    if (id) {
      return this.api.get(`/apiv1/products?search=${id}`);
    } else {
      return this.api.get('/apiv1/products');
    }
  }

  getProduct(id) {
    if (!id) {
      throw new Error('id is required');
    }

    return this.api.get(`/apiv1/products/${id}`);
  }

  saveProduct(data) {
    if (!data) {
      throw new Error('data is required');
    }

    return this.api.post('/apiv1/products', data);
  }

  editProduct(id, data) {
    if (!id) {
      throw new Error('id is required');
    }
    if (!data) {
      throw new Error('data id required');
    }

    return this.api.put(`/apiv1/products/${id}`, data);
  }

  deleteProduct(id) {
    if (!id) {
      throw new Error('id is required');
    }

    return this.api.delete(`/apiv1/product/${id}`);
  }
}

export default ProductApi;
