import React from 'react';
import GridContainer from '../../Atoms/Grid/GridContainer';
import GridItem from '../../Atoms/Grid/GridItem';
import ProductCard from '../../Molecules/ProductCard/Card';

class ProductSection extends React.Component {
  getProductsContainer = arrayProducts => {
    return arrayProducts.map((product, key) => {
      return (
        <GridItem md={4} sm={4} key={key}>
          <ProductCard onProductSelected={this.onProductSelected} data={product}/>
        </GridItem>
      );
    });
  };

  render() {
    return <GridContainer>{this.getProductsContainer(this.props.data)}</GridContainer>;
  }
}

export default ProductSection;
