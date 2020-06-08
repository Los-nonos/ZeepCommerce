import { container, title, main, mainRaised, mlAuto, mrAuto, section } from '../../zeepCommerceStyles';

const landingPageStyle = {
  section,
  container: {
    ...container,
    zIndex: '2',
  },
  mlAuto,
  mrAuto,
  title: {
    ...title,
    display: 'inline-block',
    position: 'relative',
    marginTop: '30px',
    minHeight: '32px',
    color: '#FFFFFF',
    textDecoration: 'none',
  },
  subtitle: {
    fontSize: '1.313hv',
    maxWidth: '500px',
    margin: '10px auto 0',
    paddingBottom: '50px',
  },
  main,
  mainRaised,
  containerSection: {
    ...container,
  },
  textCenter: {
    text: 'center',
  },
  sectionSplited: {
    paddingTop: '100px',
  },
};

export default landingPageStyle;
