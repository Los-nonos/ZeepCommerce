import React from 'react';
import GridContainer from '../../Atoms/Grid/GridContainer';
import GridItem from '../../Atoms/Grid/GridItem';
import ProductCard from '../../Molecules/ProductCard/Card';

class ProductSection extends React.Component {
  renderProductContainer = () => {
    const array = this.props.data;
    let arrayJSX = [];
    let min = 0;
    let max = 3;

    for (let index = 0; index < array.length; index += 3) {
      const subArray = array.slice(min, max);
      console.log(subArray);
      arrayJSX.push(this.getProductsContainer(subArray));
      min = max;
      max = max + 3;
    }

    return arrayJSX;
  };

  getProductsContainer = arrayProducts => {
    const arrayJSX = arrayProducts.map(product => {
      return (
        <GridItem md={4} sm={4}>
          <ProductCard onProductSelected={this.onProductSelected} data={product} />
        </GridItem>
      );
    });
    return arrayJSX;
  };

  render() {
    return <GridContainer>{this.getProductsContainer(this.props.data)}</GridContainer>;
  }
}

export default ProductSection;
