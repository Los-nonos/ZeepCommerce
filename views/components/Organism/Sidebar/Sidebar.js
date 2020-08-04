import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
// core components

import sidebarStyle from '../../../../styles/zeepCommerceStyle/components/sidebarStyle';
import { Link } from '@material-ui/core';
import { pages, redirectTo } from '../../../../utils/helpers/redirectTo';

const Sidebar = ({ ...props }) => {
  // verifies if routeName is the one active (in browser input)
  const { classes, color, logo, image, logoText, routes } = props;
  let links = (
    <List className={classes.list}>
      {routes.map((prop, key) => {
        if (prop.layout === '/dashboard') {
          let activePro = ' ';
          let listItemClasses;
          if (prop.path === '/upgrade-to-pro') {
            activePro = classes.activePro + ' ';
            listItemClasses = classNames({
              [' ' + classes[color]]: true,
            });
          } else {
            listItemClasses = classNames({
              [' ' + classes[color]]: false,
            });
          }
          const whiteFontClasses = classNames({
            [' ' + classes.whiteFont]: false,
          });
          return (
            <Link to={prop.layout + prop.path} className={activePro + classes.item} activeClassName="active" key={key}>
              <ListItem
                button
                className={classes.itemLink + listItemClasses}
                onClick={() => {
                  redirectTo(prop.layout + prop.path);
                }}
              >
                {typeof prop.icon === 'string' ? (
                  <Icon className={classNames(classes.itemIcon, whiteFontClasses)}>{prop.icon}</Icon>
                ) : (
                  <prop.icon className={classNames(classes.itemIcon, whiteFontClasses)} />
                )}
                <ListItemText
                  primary={prop.name}
                  className={classNames(classes.itemText, whiteFontClasses)}
                  disableTypography={true}
                />
              </ListItem>
            </Link>
          );
        } else {
          return null;
        }
      })}
    </List>
  );
  let brand = (
    <div className={classes.logo}>
      <div
        onClick={() => {
          redirectTo(pages.home);
        }}
        className={classes.logoImage}
      >
        <img src={logo} alt="logo" className={classes.img} />
      </div>
    </div>
  );
  return (
    <div>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor="right"
          open={props.open}
          classes={{
            paper: classNames(classes.drawerPaper),
          }}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>{links}</div>
          {image !== undefined ? (
            <div className={classes.background} style={{ backgroundImage: 'url(' + image + ')' }} />
          ) : null}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          anchor="left"
          variant="permanent"
          open
          classes={{
            paper: classNames(classes.drawerPaper),
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>{links}</div>
          {image !== undefined ? (
            <div className={classes.background} style={{ backgroundImage: 'url(' + image + ')' }} />
          ) : null}
        </Drawer>
      </Hidden>
    </div>
  );
};

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(sidebarStyle)(Sidebar);
