import React from 'react';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import modalStyle from '../../../../../styles/zeepCommerceStyle/modalStyle';
import PropTypes from 'prop-types';
import CustomInput from '../../../Atoms/CustomInput/CustomInput';
import GridItem from '../../../Atoms/Grid/GridItem';
import GridContainer from '../../../Atoms/Grid/GridContainer';
import Button from '../../../Atoms/CustomButtons/Button';
import Badge from '../../../Atoms/Badge/Badge';
import CustomLinearProgress from '../../../Atoms/CustomLinearProgress/CustomLinearProgress';

class ContactData extends React.Component {
  constructor(props) {
    super(props);
    const { street, addressNumber, state, city, postalCode, email, linkedInUrl, phoneNumber } = props;
    this.state = {
      showContactData: true,
      formValues: {
        street: street,
        addressNumber: addressNumber,
        state: state,
        city: city,
        postalCode: postalCode,
        email: email,
        linkedInUrl: linkedInUrl,
        phoneNumber: phoneNumber,
      },
    };
  }

  handleCollapsable = () => {
    this.setState({ showContactData: !this.state.showContactData });
  };

  fieldsCompleted = () => {
    let total = 0;
    for (const field in this.state.formValues) {
      if (this.state.formValues[field] !== '' && this.state.formValues[field] !== undefined) {
        total++;
      }
    }
    return total;
  };

  handleChange = e => {
    this.setState({ formValues: { ...this.state.formValues, [e.target.name]: e.target.value } });
  };

  render() {
    const { classes } = this.props;
    this.props.returnValues(this.state.formValues);
    return (
      <GridContainer alignItems={'center'}>
        <GridItem md={9}>
          {this.state.showContactData ? (
            <GridContainer>
              <GridItem xs={12} sm={12} md={3}>
                <CustomInput
                  labelText="Street"
                  id="street"
                  error={this.props.formErrors.street !== undefined}
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    onChange: this.handleChange,
                    required: false,
                    defaultValue: this.state.formValues.street,
                    name: 'street',
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={1}>
                <CustomInput
                  labelText="Number"
                  id="addressNumber"
                  error={this.props.formErrors.addressNumber !== undefined}
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    onChange: this.handleChange,
                    required: false,
                    defaultValue: this.state.formValues.addressNumber,
                    name: 'addressNumber',
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <CustomInput
                  labelText="City"
                  id="city"
                  error={this.props.formErrors.city !== undefined}
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    onChange: this.handleChange,
                    defaultValue: this.state.formValues.city,
                    name: 'city',
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <CustomInput
                  labelText="State/Province"
                  id="state"
                  error={this.props.formErrors.state !== undefined}
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    onChange: this.handleChange,
                    defaultValue: this.state.formValues.state,
                    name: 'state',
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="Postal code"
                  id="postalCode"
                  error={this.props.formErrors.postalCode !== undefined}
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    onChange: this.handleChange,
                    defaultValue: this.state.formValues.postalCode,
                    name: 'postalCode',
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <CustomInput
                  labelText="E-Mail"
                  id="email"
                  error={this.props.formErrors.email !== undefined}
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    onChange: this.handleChange,
                    required: false,
                    defaultValue: this.state.formValues.email,
                    name: 'email',
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <CustomInput
                  labelText="Phone number"
                  id="phoneNumber"
                  error={this.props.formErrors.phoneNumber !== undefined}
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    onChange: this.handleChange,
                    required: false,
                    defaultValue: this.state.formValues.phoneNumber,
                    name: 'phoneNumber',
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Pais"
                  id="country"
                  required
                  error={this.props.formErrors.country !== undefined}
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    onChange: this.handleChange,
                    required: true,
                    defaultValue: this.state.formValues.country,
                    name: 'country',
                  }}
                />
              </GridItem>
            </GridContainer>
          ) : (
            <GridContainer justify={'center'}>
              <GridItem md={8}>
                <Badge custom classes={classes.customBadge} color={'success'}>
                  {this.fieldsCompleted()}/8
                </Badge>
                <CustomLinearProgress
                  variant="determinate"
                  color={'success'}
                  value={(this.fieldsCompleted() / 8) * 100}
                />
              </GridItem>
            </GridContainer>
          )}
        </GridItem>
        <GridItem md={3}>
          {this.state.showContactData ? (
            <Button color={'primary'} size={'sm'} onClick={this.handleCollapsable}>
              Ocultar datos de contacto
            </Button>
          ) : (
            <Button color={'primary'} size={'sm'} onClick={this.handleCollapsable}>
              Mostrar datos de contacto
            </Button>
          )}
        </GridItem>
      </GridContainer>
    );
  }
}

ContactData.PropTypes = {
  returnValues: PropTypes.func,
  street: PropTypes.string,
  addressNumber: PropTypes.number,
  city: PropTypes.string,
  state: PropTypes.string,
  email: PropTypes.string,
  linkedInUrl: PropTypes.string,
  phoneNumber: PropTypes.string,
  postalCode: PropTypes.number,
};

const mapStateToProps = state => {
  return { ...state.dashboardReducer, ...state.generalReducer };
};

export default connect(mapStateToProps)(withStyles(modalStyle)(ContactData));
