import React from 'react';
import { connect } from 'react-redux';
// imports material-ui/core
import InputAdornment from '@material-ui/core/InputAdornment';

// imports material-ui/icons
import LockOutlined from '@material-ui/icons/LockOutlined';
import LockOpenOutlined from '@material-ui/icons/LockOpenOutlined';

import GridContainer from '../../Atoms/Grid/GridContainer';
import GridItem from '../../Atoms/Grid/GridItem';
import CustomInput from '../../Atoms/CustomInput/CustomInput';
import Button from '../../Atoms/CustomButtons/Button';
import Card from '../../Atoms/Card/Card';
import CardBody from '../../Atoms/Card/CardBody';
import CardHeader from '../../Atoms/Card/CardHeader';
import CardFooter from '../../Atoms/Card/CardFooter';
import { withStyles } from '@material-ui/core';
import styles from '../../../../styles/zeepCommerceStyle/pages/changePasswordStyle';
import * as actions from '../../../../actions/LoginActions';
import * as generalActions from '../../../../actions/GeneralActions';
import Notification from '../../Molecules/Notification/Notification';

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [],
      errors: {},
    };
    this.dispatch = props.dispatch;
  }

  handleSubmit = e => {
    e.preventDefault();

    const oldPassword = e.target.elements.oldPassword.value;
    const newPassword = e.target.elements.newPassword.value;
    const newRepeatPassword = e.target.elements.newRepeatPassword.value;
    if(newPassword === newRepeatPassword) {
      this.dispatch(actions.changePassword(this.props.userData.id, oldPassword, newPassword));
    } else {
      this.dispatch(generalActions.showNotification('Las contraseñas no son iguales!', true, 400));
    }
  };

  closeNotification = () => {
    this.dispatch(generalActions.closeNotification());
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Notification closeNotification={this.closeNotification} />
        <GridContainer justify="center">
          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <form className={classes.form} onSubmit={this.handleSubmit}>
                <CardHeader color="primary" className={classes.cardHeader}>
                  <h4>CAMBIAR CONTRASEÑA</h4>
                </CardHeader>
                <CardBody>
                  <CustomInput
                    labelText="Contraseña actual"
                    id="pass"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      type: 'password',
                      name: 'oldPassword',
                      endAdornment: (
                        <InputAdornment position="end">
                          <LockOpenOutlined className={classes.inputIconsColor} />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <CustomInput
                    labelText="Contraseña nueva"
                    id="pass"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      type: 'password',
                      name: 'newPassword',
                      endAdornment: (
                        <InputAdornment position="end">
                          <LockOutlined className={classes.inputIconsColor} />
                        </InputAdornment>
                      ),
                      autoComplete: 'off',
                    }}
                  />
                  <CustomInput
                    labelText="Repita la contraseña"
                    id="pass"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      type: 'password',
                      name: 'newRepeatPassword',
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
                  <Button simple size="lg" type={'submit'}>
                    Reemplazar contraseña
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ...state.loginReducer, ...state.generalReducer };
}

export default connect(mapStateToProps)(withStyles(styles)(Description));
