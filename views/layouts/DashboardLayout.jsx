import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import routes from '../../utils/routes/dashboardRoutes'

const dashboardLayoutStyles = {};

class DashboardLayout extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <>
        <Loader />
        <div className={classes.wrapper}>
          <Sidebar
            routes={routes}
            logo={logo}
            handleDrawerToggle={this.handleDrawerToggle}
            open={this.state.mobileOpen}
            color={this.state.color}
            userRoles={this.state.userRoles}
            {...rest}
          />
          <div className={classes.mainPanel} ref="mainPanel">
            <Header
              routes={routes}
              handleDrawerToggle={this.handleDrawerToggle}
              color={"primary"}
              {...rest}
            />
            <div className={classes.content}>
              <div className={classes.container}>
                <Switch>
                  {routes.map((prop, key) => {
                    if (prop.layout === "/dashboard") {
                      return (
                        <Route
                          path={prop.layout + prop.path}
                          component={props => {
                            const Component = prop.component;
                            return <Component {...props} {...userInfo} />;
                          }}
                          key={key}
                        />
                      );
                    }
                  })}
                </Switch>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return state.dashboardReducer;
};

export default connect(mapStateToProps)(withStyles(dashboardLayoutStyles)(DashboardLayout));
