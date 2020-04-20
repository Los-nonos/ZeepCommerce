import React from 'react';

// imports material-ui/core
import InputAdornment from '@material-ui/core/InputAdornment';

// imports material-ui/icons
import Email from '@material-ui/icons/Email';
import LockOutlined from '@material-ui/icons/LockOutlined';

import GridContainer from '../../Atoms/Grid/GridContainer';
import GridItem from '../../Atoms/Grid/GridItem';
import CustomInput from '../../Atoms/CustomInput/CustomInput';
import Button from '../../Atoms/CustomButtons/Button';
import Card from '../../Atoms/Card/Card';
import CardBody from '../../Atoms/Card/CardBody';
import CardHeader from '../../Atoms/Card/CardHeader';
import CardFooter from '../../Atoms/Card/CardFooter';
import { makeStyles } from '@material-ui/core';
import styles from '../../../../style/zeepCommerceStyle/pages/loginPage';

const useStyles = makeStyles(styles);

export default function Description(props) {
  const classes = useStyles();
  return (
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
              <form className={classes.form}>
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
                      <Button simple size="lg">
                        Iniciar sesión
                      </Button>
                      <Button simple size="lg">
                        Registrese
                      </Button>
                    </GridContainer>
                    <p>
                      ¿No recuerda su contraseña? Recuperela <a href="/signup">Aquí</a>
                    </p>
                  </GridContainer>
                </CardFooter>
              </form>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
