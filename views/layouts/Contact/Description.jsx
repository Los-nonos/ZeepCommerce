import React from 'react';
import GridItem from '../../components/Atoms/Grid/GridItem';
import GridContainer from '../../components/Atoms/Grid/GridContainer';
import Card from '../../components/Atoms/Card/Card';
import contactPageStyle from '../../../style/zeepCommerceStyle/pages/contactPageStyle.js'
import withStyles from '@material-ui/core/styles/withStyles';
import CustomInput from '../../components/Atoms/CustomInput/CustomInput';

class Description extends React.Component{
  render() {
    const { classes } = this.props;
    return (
      <div style={{backgroundImage: 'url(/img/bg2.jpg)'}}>
        <div className={classes.container}>
          <Card className={classes.cardHeader}>
            <GridContainer direction={'column'} >
              <GridContainer justify={'center'} direction={'row'} >
                <GridItem xs={6}>
                    <form>
                      <GridContainer className={`${classes.fromContact} ${classes.leftRight}`} >
                        <GridItem classKey={'grid-xs-6'}>
                          <CustomInput labelClasses={classes.inputs} labelText={'Nombre'} formControlProps={{name: 'name'}} />
                        </GridItem>
                        <GridItem classKey={'grid-xs-6'}>
                          <CustomInput labelClasses={classes.inputs} labelText={'Apellido'} formControlProps={{name: 'surname'}} />
                        </GridItem>
                        <GridItem classKey={'grid-xs-12'}>
                          <CustomInput labelClasses={classes.inputs} labelText={'Email'} formControlProps={{name: 'email'}} />
                        </GridItem>
                        <GridItem classKey={'grid-xs-12'}>
                          <CustomInput labelClasses={classes.inputs} labelText={'Telefono'} formControlProps={{name: 'phoneNumber'}} />
                        </GridItem>
                        <GridItem classKey={'grid-xs-12'}>
                          <CustomInput labelClasses={classes.inputs} labelText={'Message'}
                                       inputProps={{'multiline': true, rows:'5'}}
                                       formControlProps={{name: 'message'}} />
                        </GridItem>
                      </GridContainer>
                    </form>
                </GridItem>
                <GridItem xs={6}>
                  <GridContainer  justify={'center'} direction={'row'} className={`${classes.fromContact} ${classes.leftRight}`}>
                    <div style={{top: '50%', left: '50%', heigth: '100%'}}><p>hola</p></div>
                  </GridContainer>
                </GridItem>
              </GridContainer>
            </GridContainer>
          </Card>
        </div>
      </div>
    );
  }
}

export default withStyles(contactPageStyle)(Description);