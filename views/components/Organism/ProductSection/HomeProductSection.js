import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import GridItem from '../../Atoms/Grid/GridItem';
import ProductCard from '../../Molecules/ProductCard/Card';
import GridContainer from '../../Atoms/Grid/GridContainer';

class HomeProductSection extends React.Component{
  constructor(props) {
    super(props);
    this.dispatch = props.dispatch;
  }

  getProductsContainer = arrayProducts => {
    return arrayProducts.map((product, key) => {
      return (
        <GridItem md={4} sm={4} key={key}>
          <ProductCard onProductSelected={this.onProductSelected} data={product} />
        </GridItem>
      );
    });
  };

  onProductSelected = (uuid) => {
    this.dispatch(this.props.seeDetails(uuid));
  }

  render() {
    return <GridContainer>{this.getProductsContainer(this.props.data)}</GridContainer>;
  }
}

HomeProductSection.propTypes = {
  data: PropTypes.object.isRequired,
}

const mapStateToProps = state => {
  return state.homeReducer;
}

export default connect(mapStateToProps)(HomeProductSection);