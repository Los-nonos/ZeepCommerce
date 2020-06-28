import React from 'react';
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
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core';

import productDetailsStyles from '../../../style/zeepCommerceStyle/pages/productDetailsStyle';

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

  render() {
    const { classes } = this.props;
    const images = [
      {
        original: '',
        thumbnail: ''
      },
      {
        original: '',
        thumbnail: ''
      },
      {
        original: '',
        thumbnail: ''
      },
      {
        original: '',
        thumbnail: ''
      }
    ]
    return (
      <div className={classes.productPage}>
        <Header
          brand="Material Kit PRO React"
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
                    items={images}
                  />
                </GridItem>
                <GridItem md={6} sm={6}>
                  <h2 className={classes.title}>Becky Silk Blazer</h2>
                  <h3 className={classes.mainPrice}>$335</h3>
                  <Accordion
                    active={0}
                    activeColor="primary"
                    collapses={[
                      {
                        title: "Description",
                        content: (
                          <p className={classes.text}>
                            Eres{"'"} daring {"'"}Grigri Fortune{"'"} swimsuit
                            has the fit and coverage of a bikini in a one-piece
                            silhouette. This fuchsia style is crafted from the
                            label{"'"}s sculpting peau douce fabric and has
                            flattering cutouts through the torso and back. Wear
                            yours with mirrored sunglasses on vacation.
                          </p>
                        )
                      },
                      {
                        title: "Designer Information",
                        content: (
                          <p className={classes.text}>
                            An infusion of West Coast cool and New York
                            attitude, Rebecca Minkoff is synonymous with It girl
                            style. Minkoff burst on the fashion scene with her
                            best-selling {"'"}Morning After Bag{"'"} and later
                            expanded her offering with the Rebecca Minkoff
                            Collection - a range of luxe city staples with a{" "}
                            {'"'}downtown romantic{'"'} theme.
                          </p>
                        )
                      },
                      {
                        title: "Details and Care",
                        content: (
                          <ul className={classes.text}>
                            <li>
                              Storm and midnight-blue stretch cotton-blend
                            </li>
                            <li>
                              Notch lapels, functioning buttoned cuffs, two
                              front flap pockets, single vent, internal pocket
                            </li>
                            <li>Two button fastening</li>
                            <li>84% cotton, 14% nylon, 2% elastane</li>
                            <li>Dry clean</li>
                          </ul>
                        )
                      }
                    ]}
                  />
                  <GridContainer className={classes.pickSize}>
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
                  </GridContainer>
                  <GridContainer className={classes.pullRight}>
                    <Button round color="rose">
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

export default withStyles(productDetailsStyles)(ProductDetails);