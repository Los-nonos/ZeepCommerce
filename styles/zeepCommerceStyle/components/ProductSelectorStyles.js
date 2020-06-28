import { mlAuto, mrAuto, cardTitle, grayColor, whiteColor, primaryColor } from '../../zeepCommerceStyles';
import tooltipsStyles from '../tooltipsStyle';
import customCheckboxRadioSwitch from '../customCheckboxRadioSwitch';

const style = {
  ...customCheckboxRadioSwitch,
  ...tooltipsStyles,
  mlAuto,
  mrAuto,
  cardTitle: {
    ...cardTitle,
    textAlign: 'center',
    marginBottom: '0px !important',
  },
  cardDescription: {
    color: grayColor,
    textAlign: 'center',
  },
  cardBodyRefine: {
    paddingLeft: '15px',
    paddingRight: '15px',
    backgroundColor: whiteColor,
  },
  textLeft: {
    textAlign: 'left',
  },
  refineButton: {
    margin: '-3px 0',
  },
  pullRight: {
    float: 'right',
  },
  pullLeft: {
    float: 'left',
  },
  priceSlider: {
    fontWeight: '500',
  },
  checkRoot: {
    padding: '14px',
    '&:hover': {
      backgroundColor: 'unset',
    },
  },
  label: {
    color: primaryColor[0],
    width: '100%'
  }
};

export default style;
