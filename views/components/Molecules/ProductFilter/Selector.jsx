import React from 'react';
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

import style from '../../../../style/zeepCommerceStyle/components/ProductSelectorStyles';

class ProductSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [1, 3],
      priceRange: [350, 450],
    };
  }

  componentDidMount() {
    let slider = this.slider1.current;
    let priceLow = this.priceLow.current;
    let priceHigh = this.priceHigh.current;
    nouislider
      .create(slider, {
        start: this.state.priceRange,
        connect: true,
        range: { min: 300, max: 500 },
        step: 1,
      })
      .on('update', function(values) {
        let currencyLow = priceLow.dataset.currency;
        let currencyHigh = priceHigh.dataset.currency;
        priceLow.innerHTML = currencyLow + Math.round(values[0]);
        priceHigh.innerHTML = currencyHigh + Math.round(values[1]);
      });
  }

  slider1 = React.createRef();
  priceLow = React.createRef();
  priceHigh = React.createRef();
  renderFilters = () => {
    const { classes } = this.props;
    const filters = this.props.filters;

    return filters.map(filter => {
      return {
        title: filter.title,
        content: filter.options.map(option => {
          return (
            <FormControlLabel
              control={
                <Checkbox
                  tabIndex={-1}
                  onClick={() => this.handleToggle(option.id)}
                  checked={this.state.checked.indexOf(option.id) !== -1}
                  checkedIcon={<Check className={classes.checkedIcon} />}
                  icon={<Check className={classes.uncheckedIcon} />}
                  classes={{
                    checked: classes.checked,
                    root: classes.checkRoot,
                  }}
                />
              }
              classes={{ label: classes.label }}
              label={option.title}
            />
          );
        }),
      };
    });
  };

  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <Card plain>
        <CardBody className={classes.cardBodyRefine}>
          <h4 className={classes.cardTitle + ' ' + classes.textLeft}>
            Refine
            <Tooltip id="tooltip-top" title="Reset Filter" placement="top" classes={{ tooltip: classes.tooltip }}>
              <Button link justIcon size="sm" className={classes.pullRight + ' ' + classes.refineButton}>
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
                      {this.props.minPrice}
                    </span>
                    <span
                      ref={this.priceHigh}
                      data-currency="$"
                      className={classNames(classes.pullRight, classes.priceSlider)}
                    >
                      {this.props.maxPrice}
                    </span>
                    <br />
                    <br />
                    <div ref={this.slider1} className="slider-blue" />
                  </CardBody>
                ),
              },
              ...this.renderFilters(),
            ]}
          />
        </CardBody>
      </Card>
    );
  }
}

export default withStyles(style)(ProductSelector);
