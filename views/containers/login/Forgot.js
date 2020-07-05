import React from 'react';
import { connect } from 'react-redux';
import GridContainer from '../../components/Atoms/Grid/GridContainer';
import GridItem from '../../components/Atoms/Grid/GridItem';
import Card from '../../components/Atoms/Card/Card';
import CardHeader from '../../components/Atoms/Card/CardHeader';
import CardBody from '../../components/Atoms/Card/CardBody';
import CustomInput from '../../components/Atoms/CustomInput/CustomInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Email from '@material-ui/icons/Email';
import CardFooter from '../../components/Atoms/Card/CardFooter';
import Button from '../../components/Atoms/CustomButtons/Button';
import Main from '../../layouts/Main';
import * as actions from '../../../actions/LoginActions';
import { withStyles } from '@material-ui/core';
import styles from '../../../styles/zeepCommerceStyle/pages/componentsSections/loginStyle';

class ForgotPassword extends React.Component {
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

    const email = e.target.elements.email.value;

    this.dispatch(actions.forgot(email));
  };

  render() {
    return (
      <Main pageName="Zeep - Forgot">
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
                        labelText="Email"
                        id="email"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: 'email',
                          name: 'email',
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <GridContainer direction="column" alignContent="center" size="auto">
                        <GridContainer direction="row" alignContent="center" justify="space-between" size="auto">
                          <Button type={'submit'} simple size="lg">
                            Recuperar contraseña
                          </Button>
                        </GridContainer>
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
}

export default connect(mapStateToProps)(withStyles(styles)(ForgotPassword));