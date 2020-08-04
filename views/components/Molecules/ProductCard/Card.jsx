import React from 'react';
import Card from '../../Atoms/Card/Card';
import CardBody from '../../Atoms/Card/CardBody';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '../../Atoms/CustomButtons/Button';
import style from '../../../../styles/zeepCommerceStyle/components/productCardStyle';
import { withStyles } from '@material-ui/core/styles';
import Favorite from '@material-ui/icons/Favorite';
import classNames from 'classnames';

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

  addInShoppingCart = () => {
    this.props.addInShoppingCart(this.props.data.id);
  }

  render() {
    const { classes } = this.props;
    if (!this.state.data) {
      return <></>;
    }
    return (
      <Card plain={true} product onClick={this.onClicked}>
        <CardBody plain={true} className={classNames(classes.mlAuto, classes.border, classes.mrAuto)}>
          <a href="" onClick={this.onClicked}>
            <img src={this.props.data.images[0]} alt="product image" height="200px" />
          </a>
          <a href="" onClick={this.onClicked}>
            <h4 className={classes.cardTitle}>{this.props.data.name}</h4>
          </a>
          <p className={classes.description}>{this.props.data.description}</p>
          <div className={classes.justifyContentBetween}>
            <div className={classes.priceContainer}>
              <span className={classes.price}>{`Precio: $${this.props.data.price.amount}`}</span>
            </div>
            <Tooltip id="tooltip-top" title="Saved to Wishlist" placement="left" classes={{ tooltip: classes.tooltip }}>
              <Button justIcon simple color="rose" className={classes.pullRight} onClick={this.addInShoppingCart}>
                <Favorite />
              </Button>
            </Tooltip>
          </div>
        </CardBody>
      </Card>
    );
  }
}

export default withStyles(style)(ProductCard);
