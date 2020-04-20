import React from 'react';
import Card from '../../Atoms/Card/Card';
import CardBody from '../../Atoms/Card/CardBody';
import CardFooter from '../../Atoms/Card/CardFooter';
import GridContainer from '../../Atoms/Grid/GridContainer';
import style from '../../../../style/zeepCommerceStyle/components/productCardStyle';
import { withStyles } from '@material-ui/core/styles';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    this.setState({ data: this.props.data });
  }

  onClicked = () => {
    this.props.onProductSelected(this.props.data.id);
  };

  render() {
    const { classes } = this.props;
    if (!this.state.data) {
      return <></>;
    }

    return (
      <Card onClick={this.onClicked} className={classes.card}>
        <CardBody>
          <img src={this.state.data.image} alt={'40px'} className={classes.image} />
        </CardBody>
        <CardFooter>
          <GridContainer direction={'column'}>
            <h6 style={{ color: '#fff' }}>{this.state.data.productName}</h6>
            <p>{this.state.data.productDescription}</p>
            <p>{`PRECIO: ${this.state.data.price}`}</p>
            {this.state.data.promotion ? <p className={classes.promotionText}>PROMOCIONADO</p> : <></>}
          </GridContainer>
        </CardFooter>
      </Card>
    );
  }
}

export default withStyles(style)(ProductCard);
