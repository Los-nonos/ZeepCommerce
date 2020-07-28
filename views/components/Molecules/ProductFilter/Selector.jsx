import React from 'react';
import { connect } from 'react-redux';
// import atom components
import Card from '../../Atoms/Card/Card';
import CardBody from '../../Atoms/Card/CardBody';
import Accordion from '../../Atoms/Accordion/Accordion';
import Button from '../../Atoms/CustomButtons/Button';
import Clearfix from '../../Atoms/Clearfix/Clearfix';

import classNames from 'classnames';
import nouislider from 'nouislider';
// import icons from material iu
import Cached from '@material-ui/icons/Cached';
import Check from '@material-ui/icons/Check';
// import components from material iu
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';

import withStyles from '@material-ui/core/styles/withStyles';

import style from '../../../../styles/zeepCommerceStyle/components/ProductSelectorStyles';

class ProductSelector extends React.Component {
  slider1 = React.createRef();
  priceLow = React.createRef();
  priceHigh = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      currentFilters: this.props.currentFilters,
      priceRange: [600, 700],
      categorySelected: '',
      brandSelected: ''
    };

    this.dispatch = props.dispatch;
  }

  componentDidMount() {
    let slider = this.slider1.current;
    let priceLow = this.priceLow.current;
    let priceHigh = this.priceHigh.current;
    nouislider
      .create(slider, {
        start: this.state.priceRange,
        connect: true,
        range: { min: this.props.priceRange.min, max: this.props.priceRange.max },
        step: 1,
      })
      .on('update', function(values) {
        let currencyLow = priceLow.dataset.currency;
        let currencyHigh = priceHigh.dataset.currency;
        priceLow.innerHTML = currencyLow + Math.round(values[0]);
        priceHigh.innerHTML = currencyHigh + Math.round(values[1]);
      });
  }

  renderFilters = () => {
    const { classes } = this.props;

    if (this.state.categorySelected === '') {
      return [];
    }

    const filters = this.props.categories;
    const categoryFilters = filters.map(filter => {
      if (filter.name === this.state.categorySelected) {
        return filter.filters;
      }
    });

    const renderFilters = categoryFilters.map(categoryFilter => {
      return categoryFilter.map((filter, key) => {
        return {
          key,
          title: filter.name,
          content: filter.options.map((option, key) => {
            return (
              <FormControlLabel
                control={
                  <Checkbox
                    tabIndex={-1}
                    onClick={() => this.handleToggle(option.name)}
                    checked={this.state.currentFilters.includes(option.name)}
                    checkedIcon={<Check className={classes.checkedIcon} />}
                    icon={<Check className={classes.uncheckedIcon} />}
                    classes={{
                      checked: classes.checked,
                      root: classes.checkRoot,
                    }}
                  />
                }
                classes={{ label: classes.label }}
                label={option.name}
                key={key}
              />
            );
          }),
        };
      });
    });

    return renderFilters[0];
  };

  renderBrands = () => {
    const { classes } = this.props;

    return this.props.brands.map((brand, key) => {
      return (
        <FormControlLabel
          control={
            <Checkbox
              tabIndex={-1}
              onClick={() => this.handleBrand(brand.name)}
              checked={this.state.brandSelected === brand.name}
              checkedIcon={<Check className={classes.checkedIcon} />}
              icon={<Check className={classes.uncheckedIcon} />}
              classes={{
                checked: classes.checked,
                root: classes.checkRoot,
              }}
            />
          }
          classes={{ label: classes.label }}
          label={brand.name}
          key={key}
        />
      );
    });
  }

  renderCategories = () => {
    const { classes } = this.props;

    return this.props.categories.map((category, key) => {
      return (
        <FormControlLabel
          control={
            <Checkbox
              tabIndex={-1}
              onClick={() => this.handleCategory(category.name)}
              checked={this.state.categorySelected === category.name}
              checkedIcon={<Check className={classes.checkedIcon} />}
              icon={<Check className={classes.uncheckedIcon} />}
              classes={{
                checked: classes.checked,
                root: classes.checkRoot,
              }}
            />
          }
          classes={{ label: classes.label }}
          label={category.name}
          key={key}
        />
      );
    });
  };

  handleToggle(value) {
    const { currentFilters } = this.state;
    const currentIndex = currentFilters.indexOf(value);
    const newChecked = [...currentFilters];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      currentFilters: newChecked,
    });
    this.handleSaveFilters();
    this.handleSubmit();
  }

  handleCategory(name) {
    if (this.state.categorySelected === name) {
      this.setState({ categorySelected: '' });
    } else {
      this.setState({ categorySelected: name });
    }
  }

  handleBrand(name) {
    if (this.state.brandSelected === name) {
      this.setState({ brandSelected: '' });
    } else {
      this.setState({ brandSelected: name });
    }
  }

  resetFilters = () => {
    this.setState({ currentFilters: [] });

    this.handleSubmit();
  };

  handleSaveFilters = () => {
    console.log(this.state.currentFilters);
    this.props.handleFilters(this.state.currentFilters);
  };

  handleSubmit = () => {
    this.dispatch(this.props.filterProducts(this.state.currentFilters, 1));
  };

  render() {
    const { classes } = this.props;
    return (
      <Card plain>
        <CardBody className={classes.cardBodyRefine}>
          <h4 className={classes.cardTitle + ' ' + classes.textLeft}>
            Refine
            <Tooltip id="tooltip-top" title="Reset Filter" placement="top" classes={{ tooltip: classes.tooltip }}>
              <Button
                link
                onClick={this.resetFilters}
                justIcon
                size="sm"
                className={classes.pullRight + ' ' + classes.refineButton}
              >
                <Cached />
              </Button>
            </Tooltip>
            <Clearfix />
          </h4>
          <Accordion
            active={[0, 2]}
            activeColor="rose"
            collapses={[
              {
                title: 'Price Range',
                content: (
                  <CardBody className={classes.cardBodyRefine}>
                    <span
                      ref={this.priceLow}
                      data-currency="$"
                      className={classNames(classes.pullLeft, classes.priceSlider)}
                    >
                      {this.props.priceRange.min}
                    </span>
                    <span
                      ref={this.priceHigh}
                      data-currency="$"
                      className={classNames(classes.pullRight, classes.priceSlider)}
                    >
                      {this.props.priceRange.max}
                    </span>
                    <br />
                    <br />
                    <div ref={this.slider1} className="slider-blue" />
                  </CardBody>
                ),
              },
              {
                title: 'Categorias',
                content: this.renderCategories(),
              },
              {
                title: 'Marcas',
                content: this.renderBrands(),
              },
              ...this.renderFilters(),
            ]}
          />
        </CardBody>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return state.productsReducer;
};

export default connect(mapStateToProps)(withStyles(style)(ProductSelector));
