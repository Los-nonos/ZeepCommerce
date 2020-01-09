import RemoteQuery from './RemoteQuery'

class Products
{
    static getAll() {
        const url = '/apiv1/products'

        return RemoteQuery.get(url)
    }

    static createProduct(products) {
        const url = 'apiv1/products'

        return RemoteQuery.post(url, products)
    }
}

export default Products