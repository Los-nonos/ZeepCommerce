import React from 'react';
import { connect } from 'react-redux';

import Main from '../../layouts/Main';
import Parallax from '../../components/Molecules/Parallax/Parallax';
import Button from '../../components/Atoms/CustomButtons/Button';

import HomeProductSection from '../../components/Organism/ProductSection/HomeProductSection';
import GridContainer from '../../components/Atoms/Grid/GridContainer';
import GridItem from '../../components/Atoms/Grid/GridItem';

import classNames from 'classnames';
import * as actions from '../../../actions/HomeActions';
import * as productActions from '../../../actions/SearchActions';

import withStyles from '@material-ui/core/styles/withStyles';
import style from '../../../styles/zeepCommerceStyle/pages/landingPage';
import { pages, redirectTo } from '../../../utils/helpers/redirectTo';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.dispatch = props.dispatch;
    this.loadProducts();
  }

  loadProducts = () => {
    this.dispatch(actions.LoadProductsForHome());
  };

  render() {
    const { classes } = this.props;
    return (
      <Main pageName="Home - Zeep">
        <div>
          <Parallax filter="dark" small>
            <div className={classes.container}>
              <GridContainer>
                <GridItem md={8} sm={8} className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}>
                  <div className={classes.brand}>
                    <h1 className={classes.title}>Bienvenidos a Zeep!</h1>
                  </div>
                </GridItem>
              </GridContainer>
            </div>
          </Parallax>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.section}>
              <div className={classes.containerSection}>
                <GridContainer>
                  <GridItem md={12} sm={12} className={classes.sectionSplited}>
                    <h2 className={`${classes.subtitle} ${classes.mlAuto} ${classes.mrAuto}`}>Productos Destacados</h2>
                    <HomeProductSection
                      seeDetails={productActions.seeDetails}
                      data={this.props.featuredProducts.slice(0, 3)}
                    />
                  </GridItem>
                  <GridItem md={12} sm={12} className={classes.sectionSplited}>
                    <h2 className={`${classes.subtitle} ${classes.mlAuto} ${classes.mrAuto}`}>
                      Productos Más Vendidos
                    </h2>
                    <HomeProductSection
                      seeDetails={productActions.seeDetails}
                      data={this.props.selledProducts.slice(0, 3)}
                    />
                  </GridItem>
                  <GridItem md={12} sm={12} className={classes.sectionSplited}>
                    <h2 className={`${classes.subtitle} ${classes.mlAuto} ${classes.mrAuto}`}>Nuestros Productos</h2>
                    <HomeProductSection seeDetails={productActions.seeDetails} data={this.props.products.slice(0, 3)} />
                  </GridItem>
                  <GridItem md={3} sm={3} className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}>
                    <Button
                      simple
                      fullWidth
                      color="primary"
                      className={classes.title}
                      onClick={() => {
                        redirectTo(pages.products);
                      }}
                    >
                      Ver más
                    </Button>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
        </div>
      </Main>
    );
  }
}

const mapStateToProps = state => {
  return state.homeReducer;
};

export default connect(mapStateToProps)(withStyles(style)(Home));
