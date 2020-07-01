import React from 'react';
import { connect } from 'react-redux';

// Components
import Main from '../../layouts/Main';
import GridContainer from '../../components/Atoms/Grid/GridContainer';
import GridItem from '../../components/Atoms/Grid/GridItem';
import Card from '../../components/Atoms/Card/Card';
import CardHeader from '../../components/Atoms/Card/CardHeader';
import CardBody from '../../components/Atoms/Card/CardBody';
import CustomInput from '../../components/Atoms/CustomInput/CustomInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Email from '@material-ui/icons/Email';
import LockOutlined from '@material-ui/icons/LockOutlined';
import CardFooter from '../../components/Atoms/Card/CardFooter';
import Button from '../../components/Atoms/CustomButtons/Button';

import * as actions from '../../../actions/LoginActions';
import loginStyle from '../../../styles/zeepCommerceStyle/pages/componentsSections/loginStyle';
import { withStyles } from '@material-ui/core';
import { pages, redirectTo } from '../../../utils/helpers/redirectTo';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [],
      errors: {},
    };
    this.dispatch = props.dispatch;
  }

  login = e => {
    e.preventDefault();

    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    this.dispatch(actions.login(username, password));
  };

  renderError() {
    const { classes } = this.props;
    return (
      <div className={classes.error}>
        <p>Incorrect credentials! Try again</p>
      </div>
    );
  }

  render() {
    const { classes } = this.props;
    return (
      <Main pageName="Zeep - Login">
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: 'url(/img/bg2.jpg)',
            backgroundSize: 'cover',
            width: '100%',
            height: '80%',
            backgroundPosition: 'top center',
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={6} md={4}>
                <Card>
                  <form className={classes.form} onSubmit={this.login}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h4>INICIAR SESIÓN</h4>
                    </CardHeader>
                    <CardBody>
                      <CustomInput
                        labelText="Username"
                        id="username"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: 'text',
                          name: 'username',
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          ),
                        }}
                      />
                      <CustomInput
                        labelText="Password"
                        id="pass"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: 'password',
                          name: 'password',
                          endAdornment: (
                            <InputAdornment position="end">
                              <LockOutlined className={classes.inputIconsColor} />
                            </InputAdornment>
                          ),
                          autoComplete: 'off',
                        }}
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <GridContainer direction="column" alignContent="center" size="auto">
                        <GridContainer direction="row" alignContent="center" justify="space-between" size="auto">
                          <Button type={'submit'} simple size="lg">
                            Iniciar sesión
                          </Button>
                          <Button simple size="lg" onClick={() => redirectTo(pages.signup)}>
                            Registrese
                          </Button>
                        </GridContainer>
                        <p>
                          ¿No recuerda su contraseña? Recuperela <a href={pages.forgotPassword}>Aquí</a>
                        </p>
                      </GridContainer>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </Main>
    );
  }
}

const mapStateToProps = state => {
  return state.loginReducer;
};

export default connect(mapStateToProps)(withStyles(loginStyle)(LoginPage));
