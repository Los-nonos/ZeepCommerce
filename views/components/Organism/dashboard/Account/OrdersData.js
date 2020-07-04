import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../../../actions/DashboardActions';
import { Roles } from '../../../../../utils/constants/Roles';
import GridContainer from '../../../Atoms/Grid/GridContainer';
import GridItem from '../../../Atoms/Grid/GridItem';
import Button from '../../../Atoms/CustomButtons/Button';
import Badge from '../../../Atoms/Badge/Badge';
import CustomLinearProgress from '../../../Atoms/CustomLinearProgress/CustomLinearProgress';
import { withStyles } from '@material-ui/core';
import modalStyle from '../../../../../styles/zeepCommerceStyle/modalStyle';
import CustomInput from '../../../Atoms/CustomInput/CustomInput';

class OrdersData extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      showOrdersData: true,
      formValues: {
        country: '',
      }
    }
    this.dispatch = props.dispatch;
  }

  componentDidMount() {
    this.dispatch(actions.checkRoles([Roles.webcustomer]))
  }

  fieldsCompleted = () => {
    let total = 0;
    for (const field in this.state.formValues) {
      if (this.state.formValues[field] !== '' && this.state.formValues[field] !== undefined) {
        total++;
      }
    }
    return total;
  }

  handleChange = e => {
    this.setState({ formValues: { ...this.state.formValues, [e.target.name]: e.target.value } });
  };

  handleCollapsable = () => {
    this.setState({ showOrdersData: !this.state.showOrdersData });
  };

  render() {
    const { classes } = this.props;

    return (
      <GridContainer alignItems={'center'}>
        <GridItem md={9}>
          {this.state.showOrdersData ? (
            <GridContainer alignItems={'center'} style={{
              backgroundColor: '#000'
            }}>
              <GridItem md={4}>
                <CustomInput
                  labelText="Condición de IVA"
                  id="dni"
                  required
                  error={this.props.formErrors.vatCondition !== undefined}
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    onChange: this.handleChange,
                    required: true,
                    defaultValue: this.state.formValues.vatCondition,
                    name: 'vatCondition',
                  }}
                />
              </GridItem>
              <GridItem md={4}>
                <CustomInput
                  labelText="Clave de impuestos"
                  id="dni"
                  required
                  error={this.props.formErrors.taxationKey !== undefined}
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    onChange: this.handleChange,
                    required: true,
                    defaultValue: this.state.formValues.taxationKey,
                    name: 'taxationKey',
                  }}
                />
              </GridItem>
              <GridItem md={4}>
                <CustomInput
                  labelText="Ingresos brutos"
                  id="dni"
                  required
                  error={this.props.formErrors.grossIncome !== undefined}
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    onChange: this.handleChange,
                    required: true,
                    defaultValue: this.state.formValues.grossIncome,
                    name: 'grossIncome',
                  }}
                />
              </GridItem>
            </GridContainer>
          ) : (
            <GridContainer justify={'center'}>
              <GridItem md={8}>
                <Badge custom classes={classes.customBadge} color={'success'}>
                  {this.fieldsCompleted()}/3
                </Badge>
                <CustomLinearProgress
                  variant="determinate"
                  color={'success'}
                  value={(this.fieldsCompleted() / 3) * 100}
                />
              </GridItem>
            </GridContainer>
          )}
        </GridItem>
        <GridItem md={3}>
          {this.state.showOrdersData ? (
            <Button color={'primary'} size={'sm'} onClick={this.handleCollapsable}>
              Ocultar datos de tributacion
            </Button>
          ) : (
            <Button color={'primary'} size={'sm'} onClick={this.handleCollapsable}>
              Mostrar datos de tributacion
            </Button>
          )}
        </GridItem>
      </GridContainer>
    );
  }
}

const mapStateToProps = state => {
  return state.dashboardReducer;
}

export default connect(mapStateToProps)(withStyles(modalStyle)(OrdersData));