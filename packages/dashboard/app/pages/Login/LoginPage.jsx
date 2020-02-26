import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';

// @material-ui/icons
import Email from '@material-ui/icons/Email';

// core components
import GridContainer from '../../components/atoms/Grid/GridContainer.jsx';
import GridItem from '../../components/atoms/Grid/GridItem.jsx';
import CustomInput from '../../components/molecules/CustomInput/CustomInput.jsx';
import Button from '../../components/atoms/CustomButtons/Button.jsx';
import Card from '../../components/molecules/Card/Card.jsx';
import CardBody from '../../components/molecules/Card/CardBody.jsx';
import CardHeader from '../../components/molecules/Card/CardHeader.jsx';
import CardFooter from '../../components/molecules/Card/CardFooter.jsx';

import loginPageStyle from '../../styles/jss/material-dashboard-react/views/loginPageStyle.jsx';
import * as actions from '../../redux/actions/LoginActions';

const rooftopColor = 'rooftopOrange';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [],
      errors: {},
    };
    this.dispatch = props.dispatch;
  }

  login = async e => {
    e.preventDefault();

    const { history } = this.props;

    const username = e.target.elements.username.value;

    const password = e.target.elements.password.value;

    this.dispatch(actions.login(username, password));
  };

  renderError() {
    const { classes } = this.props;
    if (this.state.errors.code === 'NOT_FOUND') {
      return (
        <div className={classes.error}>
          <p>Incorrect username</p>
        </div>
      );
    } else {
      if (this.state.errors.code === 'UNAUTHORIZED') {
        return (
          <div className={classes.error}>
            <p>Incorrect password</p>
          </div>
        );
      }
    }
  }

  handleToggle = value => {
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
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={8}>
            <h4 className={classes.textCenter} style={{ marginTop: 0 }}>
              Rooftop Dashboard
            </h4>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={6} md={4}>
            <form onSubmit={this.login}>
              <Card className={classes[this.state.cardAnimaton]}>
                <CardHeader className={`${classes.cardHeader} ${classes.textCenter}`} color={rooftopColor}>
                  <h4 className={classes.cardTitle}>Log in</h4>
                </CardHeader>
                <CardBody>
                  {this.state.errors ? this.renderError() : <></>}
                  <CustomInput
                    labelText="Username..."
                    id="username"
                    formControlProps={{
                      fullWidth: true,
                      className: classes.formControlClassName,
                    }}
                    inputProps={{
                      required: true,
                      name: 'username',
                      endAdornment: (
                        <InputAdornment position="end">
                          <Email className={classes.inputAdornmentIcon} />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <CustomInput
                    labelText="Password"
                    id="password"
                    formControlProps={{
                      fullWidth: true,
                      className: classes.formControlClassName,
                    }}
                    inputProps={{
                      type: 'password',
                      required: true,
                      endAdornment: (
                        <InputAdornment position="end">
                          <Icon className={classes.inputAdornmentIcon}>lock_outline</Icon>
                        </InputAdornment>
                      ),
                    }}
                  />
                </CardBody>
                <CardFooter className={classes.justifyContentCenter}>
                  <Button type="submit" color={rooftopColor}>
                    Let's Go
                  </Button>
                </CardFooter>
              </Card>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object,
  errors: PropTypes.object,
  dispatch: PropTypes.func,
  token: PropTypes.string,
};

const mapStateToProps = state => {
  return state.login;
};

export default connect(mapStateToProps)(withStyles(loginPageStyle)(LoginPage));
