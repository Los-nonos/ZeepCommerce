import React from 'react';
import CardBody from '../../Atoms/Card/CardBody';
import { redirectTo } from '../../../../utils/helpers/redirectTo';
import GridContainer from '../../Atoms/Grid/GridContainer';
import GridItem from '../../Atoms/Grid/GridItem';
import orderCardStyle from '../../../../../ZeepCommerce/styles/zeepCommerceStyle/components/orderCardStyle';
import { withStyles } from '@material-ui/core';

class OrderCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  /*TODO: centrar order*/

  render() {
    const { classes } = this.props;
    return (
        <CardBody>
          <GridContainer classNames={classes.container} alignContent={'center'} onClick={this.props.onOrderSelected(this.props.order.uuid)}>
          <GridItem md={4} sm={4} classNames={classes.center} direction="row"
                    justify="center"
                    alignItems="center">
            <p>{this.props.order.name}</p>
          </GridItem>
            <GridItem md={4} sm={4} classNames={classes.center} direction="row"
                      justify="center"
                      alignItems="center">
            <p>{this.props.order.price}</p>
          </GridItem>
            <GridItem md={4} sm={4} classNames={classes.center} direction="row"
                      justify="center"
                      alignItems="center">
            <p>{this.props.order.orderNumber}</p>
          </GridItem>
          </GridContainer>
        </CardBody>
    );
  }
}

export default withStyles(orderCardStyle)(OrderCard);