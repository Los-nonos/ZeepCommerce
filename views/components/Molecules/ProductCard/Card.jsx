import React from 'react';
import Card from '../../Atoms/Card/Card';
import CardHeader from '../../Atoms/Card/CardHeader';
import CardBody from '../../Atoms/Card/CardBody';
import CardFooter from '../../Atoms/Card/CardFooter';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '../../Atoms/CustomButtons/Button';
import style from '../../../../style/zeepCommerceStyle/components/productCardStyle';
import { withStyles } from '@material-ui/core/styles';
import Favorite from '@material-ui/icons/Favorite';

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
      <Card plain product>
        <CardHeader noShadow image>
          <a href="#pablo">
            <img src={this.state.data.image} alt="40px" height="200px" />
          </a>
        </CardHeader>
        <CardBody plain>
          <a href="#pablo">
            <h4 className={classes.cardTitle}>{this.state.data.productName}</h4>
          </a>
          <p className={classes.description}>{this.props.data.productDescription}</p>
        </CardBody>
        <CardFooter plain className={classes.justifyContentBetween}>
          <div className={classes.priceContainer}>
            <span className={classes.price}>{this.state.data.price}</span>
          </div>
          <Tooltip id="tooltip-top" title="Saved to Wishlist" placement="left" classes={{ tooltip: classes.tooltip }}>
            <Button justIcon simple color="rose" className={classes.pullRight}>
              <Favorite />
            </Button>
          </Tooltip>
        </CardFooter>
      </Card>
    );
  }
}

export default withStyles(style)(ProductCard);
