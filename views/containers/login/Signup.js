/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import * as actions from '../../../actions/SignUpActions'
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Timeline from "@material-ui/icons/Timeline";
import Code from "@material-ui/icons/Code";
import Group from "@material-ui/icons/Group";
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
import Check from "@material-ui/icons/Check";
import Favorite from "@material-ui/icons/Favorite";
// core components

import signupPageStyle from "../../../styles/zeepCommerceStyle/pages/signupStyles";

import image from "public/img/bg2.jpg";
import CustomInput from '../../components/Atoms/CustomInput/CustomInput';
import Button from '@material-ui/core/Button';
import GridItem from '../../components/Atoms/Grid/GridItem';
import InfoArea from '../../components/Atoms/InfoArea/InfoArea';
import CardBody from '../../components/Atoms/Card/CardBody';
import Card from '../../components/Atoms/Card/Card';
import GridContainer from '../../components/Atoms/Grid/GridContainer';
import Main from '../../layouts/Main';

class SignUpPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true
    };

    this.handleToggle = this.handleToggle.bind(this);
    this.dispatch = props.dispatch;
  }

  handleToggle() {
    this.setState({
      checked: !this.state.checked,
    });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }

  handleRegister = (e) => {
    e.preventDefault();

    const fields = [
      'name',
      'surname',
      'username',
      'email',
      'password',
    ];

    const formElements = e.target.elements;
    const personalData = fields
      .map(field => ({
        [field]: formElements.namedItem(field).value
      }))
      .reduce((current, next) => ({ ...current, ...next }));

    this.dispatch(actions.signUp(personalData))
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Main pageName={'Sign up'}>
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={10} md={10}>
                <Card className={classes.cardSignup}>
                  <h2 className={classes.cardTitle}>Register</h2>
                  <CardBody>
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={5} md={5}>
                        <InfoArea
                          className={classes.infoArea}
                          title="Marketing"
                          description="We've created the marketing campaign of the website. It was a very interesting collaboration."
                          icon={Timeline}
                          iconColor="rose"
                        />
                        <InfoArea
                          className={classes.infoArea}
                          title="Fully Coded in HTML5"
                          description="We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub."
                          icon={Code}
                          iconColor="primary"
                        />
                        <InfoArea
                          className={classes.infoArea}
                          title="Built Audience"
                          description="There is also a Fully Customizable CMS Admin Dashboard for this product."
                          icon={Group}
                          iconColor="info"
                        />
                      </GridItem>
                      <GridItem xs={12} sm={5} md={5}>
                        <form className={classes.form} onSubmit={this.handleRegister}>
                          <CustomInput
                            formControlProps={{
                              fullWidth: true,
                              className: classes.customFormControlClasses
                            }}
                            inputProps={{
                              name: 'name',
                              startAdornment: (
                                <InputAdornment
                                  position="start"
                                  className={classes.inputAdornment}
                                >
                                  <Face
                                    className={classes.inputAdornmentIcon}
                                  />
                                </InputAdornment>
                              ),
                              placeholder: "First Name..."
                            }}
                          />
                          <CustomInput
                            formControlProps={{
                              fullWidth: true,
                              className: classes.customFormControlClasses
                            }}
                            inputProps={{
                              name: 'surname',
                              startAdornment: (
                                <InputAdornment
                                  position="start"
                                  className={classes.inputAdornment}
                                >
                                  <Face
                                    className={classes.inputAdornmentIcon}
                                  />
                                </InputAdornment>
                              ),
                              placeholder: "Last Name..."
                            }}
                          />
                          <CustomInput
                            formControlProps={{
                              fullWidth: true,
                              className: classes.customFormControlClasses
                            }}
                            inputProps={{
                              name: 'email',
                              type: 'email',
                              startAdornment: (
                                <InputAdornment
                                  position="start"
                                  className={classes.inputAdornment}
                                >
                                  <Email
                                    className={classes.inputAdornmentIcon}
                                  />
                                </InputAdornment>
                              ),
                              placeholder: "Email..."
                            }}
                          />
                          <CustomInput
                            formControlProps={{
                              fullWidth: true,
                              className: classes.customFormControlClasses
                            }}
                            inputProps={{
                              name: 'username',
                              startAdornment: (
                                <InputAdornment
                                  position="start"
                                  className={classes.inputAdornment}
                                >
                                  <Email
                                    className={classes.inputAdornmentIcon}
                                  />
                                </InputAdornment>
                              ),
                              placeholder: "Username..."
                            }}
                          />
                          <CustomInput
                            formControlProps={{
                              fullWidth: true,
                              className: classes.customFormControlClasses
                            }}
                            inputProps={{
                              name: 'password',
                              type: 'password',
                              startAdornment: (
                                <InputAdornment
                                  position="start"
                                  className={classes.inputAdornment}
                                >
                                  <Icon className={classes.inputAdornmentIcon}>
                                    lock_outline
                                  </Icon>
                                </InputAdornment>
                              ),
                              placeholder: "Password..."
                            }}
                          />
                          <FormControlLabel
                            classes={{
                              label: classes.label
                            }}
                            control={
                              <Checkbox
                                tabIndex={-1}
                                onClick={() => this.handleToggle(1)}
                                checkedIcon={
                                  <Check className={classes.checkedIcon} />
                                }
                                icon={
                                  <Check className={classes.uncheckedIcon} />
                                }
                                classes={{
                                  checked: classes.checked,
                                  root: classes.checkRoot
                                }}
                                checked={
                                  this.state.checked
                                }
                              />
                            }
                            label={
                              <span>
                                I agree to the{" "}
                                <a href="">terms and conditions</a>.
                              </span>
                            }
                          />
                          <div className={classes.textCenter}>
                            <Button round color="primary" type={'submit'} >
                              Get started
                            </Button>
                          </div>
                        </form>
                      </GridItem>
                    </GridContainer>
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
        </Main>
      </div>
    );
  }
}

SignUpPage.propTypes = {
  classes: PropTypes.object,
  dispatch: PropTypes.func,
};

const mapStateToProps = state => {
  return state.authReducer;
}

export default connect(mapStateToProps)(withStyles(signupPageStyle)(SignUpPage));
