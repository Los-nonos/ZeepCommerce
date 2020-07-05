import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import DashboardLayout from '../../layouts/DashboardLayout';
import PersonalData from '../../components/Organism/dashboard/Account/PersonalData';
import { Roles } from '../../../utils/constants/Roles';
import * as actions from '../../../actions/DashboardActions';
import ContactData from '../../components/Organism/dashboard/Account/ContactData';
import OrdersData from '../../components/Organism/dashboard/Account/OrdersData';
import GridContainer from '../../components/Atoms/Grid/GridContainer';
import GridItem from '../../components/Atoms/Grid/GridItem';
import Button from '../../components/Atoms/CustomButtons/Button';
import { isLogged } from '../../../utils/helpers/isLogged';
const styles = {};

class AccountPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: {},
    }
    this.dispatch = props.dispatch;
    this.dispatch(actions.checkRoles([Roles.webcustomer]));
    if(isLogged) {
      this.dispatch(actions.getUserById(this.props.userData.id));
    }
  }

  updateValues = values => {
    this.setState({
      formValues: { ...this.state.formValues, ...values },
    });
  };

  handleSubmit = () => {
    const body = this.state.formValues;
    body.id = this.props.userData.id;

    this.dispatch(actions.updateCustomer(body));
  }

  render() {
    const { classes } = this.props;
    return (
      <DashboardLayout>
        <GridContainer>
          <GridItem md={12} style={{ backgroundColor: '#000' }}>
            <PersonalData
              classes={classes}
              returnValues={this.updateValues}
              name={this.state.formValues.name}
              surname={this.state.formValues.surname}
              cuil={this.state.formValues.cuil}
              country={this.state.formValues.country}
              birthday={this.state.formValues.birthday}
              maritalStatus={this.state.formValues.maritalStatus}
            />
            <ContactData
              classes={classes}
              returnValues={this.updateValues}
              street={this.state.formValues.street}
              addressNumber={this.state.formValues.addressNumber}
              city={this.state.formValues.city}
              state={this.state.formValues.state}
              postalCode={this.state.formValues.postalCode}
              email={this.state.formValues.email}
              phoneNumber={this.state.formValues.phoneNumber}
              linkedInUrl={this.state.formValues.linkedInUrl}
            />
            <OrdersData
              classes={classes}
              returnValues={this.updateValues}
            />
          </GridItem>
          <GridItem md={3}>
            <Button fullWidth={true} round={true} simple={true} onClick={this.handleSubmit}>Guardar</Button>
          </GridItem>
        </GridContainer>
      </DashboardLayout>
    );
  }
}

const mapStateToProps = state => {
  return { ...state.dashboardReducer, ...state.loginReducer };
}

export default connect(mapStateToProps)(withStyles(styles)(AccountPage));