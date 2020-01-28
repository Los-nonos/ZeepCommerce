import { ApiClient } from './ApiClient';

class ProductApi {
  private api: ApiClient;
  constructor() {
    this.api = new ApiClient();
  }

  public getAllProducts(id: number | undefined) {
    if (id) {
      return this.api.get(`/products?search=${id}`);
    } else {
      return this.api.get('/products');
    }
  }

  public getProduct(id: number) {
    if (!id) {
      throw new Error('id is required');
    }

    return this.api.get(`/products/${id}`);
  }

  public saveProduct(data: any) {
    if (!data) {
      throw new Error('data is required');
    }

    return this.api.post('/products', data);
  }

  public editProduct(id: number, data: any) {
    if (!id) {
      throw new Error('id is required');
    }
    if (!data) {
      throw new Error('data id required');
    }

    return this.api.put(`/products/${id}`, data);
  }

  public deleteProduct(id: number) {
    if (!id) {
      throw new Error('id is required');
    }

    return this.api.delete(`/product/${id}`);
  }
}

export default ProductApi;
