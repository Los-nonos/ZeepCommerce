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
      <>
        <div className={classes.container}>
          <Card className={classes.cardHeader}>
            <GridContainer direction={'column'} >
              <GridContainer justify={'center'} direction={'row'} >
                <GridItem xs={6}>
                  <div className={classes.fromContact}>
                    <CustomInput labelText={'Nombre'} formControlProps={{name: 'name'}} />
                    <CustomInput labelText={'Apellido'} formControlProps={{name: 'surname'}} />
                    <CustomInput labelText={'Email'} formControlProps={{name: 'email'}} />
                  </div>
                </GridItem>
                <GridItem xs={6}>
                  <GridContainer justify={'center'}>
                    <p>hola</p>
                  </GridContainer>
                </GridItem>
              </GridContainer>
            </GridContainer>
          </Card>
        </div>
      </>
    );
  }
}

export default withStyles(contactPageStyle)(Description);