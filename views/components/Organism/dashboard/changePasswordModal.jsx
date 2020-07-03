import React from 'react';

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

class Description extends React.Component{
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <form className={classes.form}>
                <CardHeader color="primary" className={classes.cardHeader}>
                  <h4>CAMBIAR CONTRASEÑA</h4>
                </CardHeader>
                <CardBody>
                  <CustomInput
                    labelText="Contraseña actual"
                    id="email"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      type: 'password',
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
                  <Button simple size="lg">
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

export default withStyles(styles)(Description);
