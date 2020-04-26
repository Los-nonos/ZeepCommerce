import { mlAuto, mrAuto, grayColor, primaryColor, whiteColor, cardTitle, container } from '../../zeepCommerceStyles';
import tooltip from '../tooltipsStyle';

const style = {
  ...tooltip,
  mlAuto,
  mrAuto,
  cardTitle: {
    ...cardTitle,
    textAlign: 'center',
    marginBottom: '0px !important',
  },
  border: {
    borderRadius: '6px'
  },
  cardDescription: {
    color: grayColor,
    textAlign: 'center',
  },
  container: {
    ...container,
  },
  description: {
    color: whiteColor,
  },
  priceContainer: {
    display: 'inline-flex',
  },
  price: {
    fontSize: '18px',
    color: grayColor,
  },
  pullRight: {
    float: 'right',
  },
  justifyContentBetween: {
    ...mlAuto,
    WebkitBoxPack: 'justify!important',
    justifyContent: 'space-between !important',
    backgroundColor: primaryColor[0],
  },
};
export default style;
