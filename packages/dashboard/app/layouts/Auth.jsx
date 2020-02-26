import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// core components
import Footer from '../components/organisms/Footer/AuthFooter.jsx';

import routes from '../utils/routes.js';

import pagesStyle from '../styles/jss/material-dashboard-react/layouts/authStyle.jsx';

import register from '../static/img/register.jpeg';
import login from '../static/img/loginBackground.png';

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === '/auth') {
        return <Route path={prop.layout + prop.path} component={prop.component} key={key} />;
      }
      return null;
    })}
  </Switch>
);

class Pages extends React.Component {
  componentDidMount() {
    document.body.style.overflow = 'unset';
  }
  getBgImage = () => {
    if (window.location.pathname.indexOf('/auth/register-page') !== -1) {
      return register;
    } else if (window.location.pathname.indexOf('/auth/login-page') !== -1) {
      return login;
    }
  };
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <div className={classes.wrapper}>
          <div className={classes.fullPage} style={{ backgroundImage: 'url(' + this.getBgImage() + ')' }}>
            {switchRoutes}
            <Footer white />
          </div>
        </div>
      </div>
    );
  }
}

Pages.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(pagesStyle)(Pages);
