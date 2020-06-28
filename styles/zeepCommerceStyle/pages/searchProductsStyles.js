import { container, section, mlAuto, mrAuto, main, mainRaised, title, whiteColor } from '../../zeepCommerceStyles';

const style = {
  mlAuto,
  mrAuto,
  title,
  main,
  mainRaised,
  container: {
    ...container,
    zIndex: '2',
  },
  brand: {
    '& h1, & h4': {
      color: whiteColor,
    },
  },
  containerSection: {
    ...container,
  },
  section: {
    ...section,
    padding: '70px 0px',
  },
};

export default style;
