import React from 'react';
import GridItem from '../../Atoms/Grid/GridItem';
import GridContainer from '../../Atoms/Grid/GridContainer';
import Card from '../../Atoms/Card/Card';
import contactPageStyle from '../../../../style/zeepCommerceStyle/pages/contactPageStyle.js'
import withStyles from '@material-ui/core/styles/withStyles';
import CustomInput from '../../Atoms/CustomInput/CustomInput';
import RegularButton from '../../Atoms/CustomButtons/Button';

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
                        <GridItem classKey={'grid-xs-12'}>
                          <RegularButton className={{zIndex: '400'}} fullWidth={true} color={'success'} simple={true} >Send</RegularButton>
                        </GridItem>
                      </GridContainer>
                    </form>
                </GridItem>
                <GridItem xs={6}>
                  <GridContainer  justify={'center'} direction={'row'} className={`${classes.fromContact} ${classes.leftRight}`}>
                    <div style={{top: '25%', left: '25%', heigth: '100%', display: 'block', position: 'absolute'}}>
                      <h2>Zeep Contact</h2>
                      <h5>Ubicación:</h5>
                      <div style={{height: '30vh', width: '30vh', top: '10vh', left: '10vh', backgroundColor: '#fff' }}>

                      </div>
                    </div>
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