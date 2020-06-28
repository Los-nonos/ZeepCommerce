import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import ImageGallery from "react-image-gallery";
import Header from '../../components/Molecules/Header/Header';
import HeaderLinks from '../../components/Molecules/Header/HeaderLinks';
import Parallax from '../../components/Molecules/Parallax/Parallax';
import GridContainer from '../../components/Atoms/Grid/GridContainer';
import GridItem from '../../components/Atoms/Grid/GridItem';
import Button from '@material-ui/core/Button';
import { ShoppingCart } from '@material-ui/icons';
import Accordion from '../../components/Atoms/Accordion/Accordion';
import { withStyles } from '@material-ui/core';

import productDetailsStyles from '../../../styles/zeepCommerceStyle/pages/productDetailsStyle';

class ProductDetails extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      colorSelect: "0",
      sizeSelect: "0"
    };
  }
  handleSelect = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }

  cleanCharacteristics = () => {
    return this.props.productWithDetails.characteristics.map(characteristic => {
      return <li>{characteristic.name}</li>;
    });
  }

  clearImages = () => {
    return [{ original: this.props.productWithDetails.image, thumbnail: this.props.productWithDetails.image }];
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.productPage}>
        <Header
          brand="Zeep Commerce"
          links={<HeaderLinks dropdownHoverColor="rose" />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 100,
            color: "rose"
          }}
        />
        <Parallax
          image={require("public/img/bg2.jpg")}
          filter="rose"
          className={classes.pageHeader}
        >
          <div className={classes.container}>
            <GridContainer className={classes.titleRow}>
              <GridItem md={4} className={classes.mlAuto}>
                <Button color="white" className={classes.floatRight}>
                  <ShoppingCart /> 0 items
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.section, classes.sectionGray)}>
          <div className={classes.container}>
            <div className={classNames(classes.main, classes.mainRaised)}>
              <GridContainer>
                <GridItem md={6} sm={6}>
                  <ImageGallery
                    showFullscreenButton={false}
                    showPlayButton={false}
                    startIndex={3}
                    items={this.clearImages()}
                  />
                </GridItem>
                <GridItem md={6} sm={6}>
                  <h2 className={classes.title}>{this.props.productWithDetails.name}</h2>
                  <h3 className={classes.mainPrice}>${this.props.productWithDetails.price}</h3>
                  <Accordion
                    active={0}
                    activeColor="primary"
                    collapses={[
                      {
                        title: "Description",
                        content: (
                          <p className={classes.text}>
                            {this.props.productWithDetails.description}
                          </p>
                        )
                      },
                      {
                        title: "Characteristics",
                        content: (
                          <ul className={classes.text}>
                            {this.cleanCharacteristics()}
                          </ul>
                        )
                      }
                    ]}
                  />
                  {/*<GridContainer className={classes.pickSize}>
                    <GridItem md={6} sm={6}>
                      <label>Select color</label>
                      <FormControl
                        fullWidth
                        className={classes.selectFormControl}
                      >
                        <Select
                          MenuProps={{
                            className: classes.selectMenu
                          }}
                          classes={{
                            select: classes.select
                          }}
                          value={this.state.colorSelect}
                          onChange={this.handleSelect}
                          inputProps={{
                            name: "colorSelect",
                            id: "color-select"
                          }}
                        >
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected
                            }}
                            value="0"
                          >
                            Rose
                          </MenuItem>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected
                            }}
                            value="1"
                          >
                            Gray
                          </MenuItem>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected
                            }}
                            value="2"
                          >
                            White
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </GridItem>
                    <GridItem md={6} sm={6}>
                      <label>Select size</label>
                      <FormControl
                        fullWidth
                        className={classes.selectFormControl}
                      >
                        <Select
                          MenuProps={{
                            className: classes.selectMenu
                          }}
                          classes={{
                            select: classes.select
                          }}
                          value={this.state.sizeSelect}
                          onChange={this.handleSelect}
                          inputProps={{
                            name: "sizeSelect",
                            id: "size-select"
                          }}
                        >
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected
                            }}
                            value="0"
                          >
                            Small
                          </MenuItem>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected
                            }}
                            value="1"
                          >
                            Medium
                          </MenuItem>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected
                            }}
                            value="2"
                          >
                            Large
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </GridItem>
                  </GridContainer>*/}
                  <GridContainer className={classes.pullRight}>
                    <Button round color="primary">
                      Add to Cart &nbsp; <ShoppingCart />
                    </Button>
                  </GridContainer>
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state.productsReducer;
}

export default connect(mapStateToProps)(withStyles(productDetailsStyles)(ProductDetails));