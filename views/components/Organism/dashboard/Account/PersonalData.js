import React from 'react';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import modalStyle from '../../../../../styles/zeepCommerceStyle/modalStyle';
import PropTypes from 'prop-types';
import CustomInput from '../../../Atoms/CustomInput/CustomInput';
import GridItem from '../../../Atoms/Grid/GridItem';
import Button from '../../../Atoms/CustomButtons/Button';
import Badge from '../../../Atoms/Badge/Badge';
import GridContainer from '../../../Atoms/Grid/GridContainer';
import CustomLinearProgress from '../../../Atoms/CustomLinearProgress/CustomLinearProgress';

class PersonalData extends React.Component {
  constructor(props) {
    super(props);
    const { name, surname, country, maritalStatus, birthday, cuil } = props;
    this.state = {
      showPersonalData: true,
      formValues: {
        name: name,
        surname: surname,
        country: country,
        maritalStatus: maritalStatus,
        birthday: birthday,
        cuil: cuil,
      },
    };
  }

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

  handleCollapsable = () => {
    this.setState({ showPersonalData: !this.state.showPersonalData });
  };

  render() {
    const { classes } = this.props;
    this.props.returnValues(this.state.formValues);
    return (
      <GridContainer alignItems={'center'}>
        <GridItem md={9}>
          {this.state.showPersonalData ? (
            <GridContainer alignItems={'center'} style={{
              backgroundColor: '#000'
            }}>
              <GridItem xs={12} sm={12} md={4}>
                <CustomInput
                  labelText="Nombre"
                  id="name"
                  required
                  error={this.props.formErrors.name !== undefined}
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    onChange: this.handleChange,
                    required: true,
                    defaultValue: this.state.formValues.name,
                    name: 'name',
                  }}
                />
                <CustomInput
                  labelText="Apellido"
                  id="surname"
                  required
                  error={this.props.formErrors.surname !== undefined}
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    onChange: this.handleChange,
                    required: true,
                    defaultValue: this.state.formValues.surname,
                    name: 'surname',
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <CustomInput
                  labelText="Estado Civil"
                  id="maritalStatus"
                  required={true}
                  error={this.props.formErrors.maritalStatus !== undefined}
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    onChange: this.handleChange,
                    required: true,
                    defaultValue: this.state.formValues.maritalStatus,
                    name: 'maritalStatus',
                  }}
                />
                <CustomInput
                  labelText=""
                  id="birthday"
                  required={true}
                  error={this.props.formErrors.birthday !== undefined}
                  formControlProps={{
                    fullWidth: false,
                  }}
                  inputProps={{
                    onChange: this.handleChange,
                    type: 'date',
                    required: true,
                    defaultValue: this.state.formValues.birthday,
                    name: 'birthday',
                  }}
                />
                <span className={classes.customLabelDate}>Cumpleaños</span>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <CustomInput
                  labelText="CUIL"
                  id="cuil"
                  required={true}
                  error={this.props.formErrors.cuil !== undefined}
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    onChange: this.handleChange,
                    required: true,
                    defaultValue: this.state.formValues.cuil,
                    name: 'cuil',
                  }}
                />
                <CustomInput
                  labelText="D.N.I"
                  id="dni"
                  required
                  error={this.props.formErrors.dni !== undefined}
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    onChange: this.handleChange,
                    required: true,
                    defaultValue: this.state.formValues.country,
                    name: 'dni',
                  }}
                />
              </GridItem>
            </GridContainer>
          ) : (
            <GridContainer justify={'center'}>
              <GridItem md={8}>
                <Badge custom classes={classes.customBadge} color={'success'}>
                  {this.fieldsCompleted()}/6
                </Badge>
                <CustomLinearProgress
                  variant="determinate"
                  color={'success'}
                  value={(this.fieldsCompleted() / 6) * 100}
                />
              </GridItem>
            </GridContainer>
          )}
        </GridItem>
        <GridItem md={3}>
          {this.state.showPersonalData ? (
            <Button color={'primary'} size={'sm'} onClick={this.handleCollapsable}>
              Ocultar datos personales
            </Button>
          ) : (
            <Button color={'primary'} size={'sm'} onClick={this.handleCollapsable}>
              Mostrar datos personales
            </Button>
          )}
        </GridItem>
      </GridContainer>
    );
  }
}

PersonalData.PropTypes = {
  name: PropTypes.string,
  surname: PropTypes.string,
  cuil: PropTypes.string,
  profileImage: PropTypes.string,
  country: PropTypes.string,
  birthday: PropTypes.string,
  maritalStatus: PropTypes.string,
  returnValues: PropTypes.func,
};

const mapStateToProps = state => {
  return { ...state.dashboardReducer, ...state.generalReducer };
};

export default connect(mapStateToProps)(withStyles(modalStyle)(PersonalData));
