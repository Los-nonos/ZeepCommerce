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
        <GridItem xs={4}>
          <ProductCard data={product} />
        </GridItem>
      );
    });
    return <GridContainer direction={'row'}>{arrayJSX}</GridContainer>;
  };

  render() {
    return (
      <GridContainer justify={'center'} direction={'column'}>
        {this.renderProductContainer()}
      </GridContainer>
    );
  }
}

export default ProductSection;
