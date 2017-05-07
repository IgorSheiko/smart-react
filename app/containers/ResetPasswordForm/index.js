import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'formsy-react';
import { createStructuredSelector } from 'reselect';
import InputControl from 'components/InputControl';
import FormWrapper from 'containers/ForgotPasswordForm/FormWrapper';
import { makeSelectresetPasswordFailedData } from 'pages/ResetPasswordPage/selectors';
import { resetPasswordRequest } from 'pages/ResetPasswordPage/actions';


class ResetPasswordForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canSubmit: false,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.disableButton = this.disableButton.bind(this);
  }

  onSubmit(data, resetForm, invalidateForm) {
    const obj = {
      token: this.props.token,
      email: this.props.email,
      password: data.password,
    };
    this.props.resetPasswordRequest(obj);
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  render() {
    return (
      <FormWrapper>
        { !this.props.isResetPasswordFailed ?
          (<Form onSubmit={this.onSubmit} onValid={this.enableButton} onInvalid={this.disableButton} className="form-horizontal sign-form">

            <InputControl
              className="form-group-white"
              labelClassName="col-sm-3 control-label"
              divClassName="col-sm-6"
              name="password"
              title="Пароль"
              type="password"
              value=""
              required
              bottomErrorBox
              validations="minLength:8"
              validationErrors={{
                minLength: 'Минимальная длина пароля 8 символов',
              }}
            />

            <InputControl
              className="form-group-white confirm-password-control"
              labelClassName="col-sm-3 control-label"
              divClassName="col-sm-6"
              name="password_confirmation"
              title="Подтвердите Пароль"
              type="password"
              value=""
              required
              bottomErrorBox
              validations="equalsField:password"
              validationErrors={{
                equalsField: 'Пароли не совпадают',
              }}
            />
            <div className="form-group">
              <div className="col-sm-offset-3 col-sm-7">
                <button type="submit" disabled={!this.state.canSubmit} className="btn btn-danger-dark">
                  Далее
                </button>
              </div>
            </div>

          </Form>
        ) :
        (
          <div className="row">
            <div className="col-sm-7 col-sm-offset-3">
              <div className="reset-password">
                <h2>Время действия ссылки истекло.</h2>
              </div>
            </div>
          </div>
        )
      }
      </FormWrapper>
    );
  }
}
ResetPasswordForm.propTypes = {
  email: React.PropTypes.string.isRequired,
  token: React.PropTypes.string.isRequired,
};

const mapDispatchToProps = ({
  resetPasswordRequest,
});
const mapStateToProps = createStructuredSelector({
  isResetPasswordFailed: makeSelectresetPasswordFailedData(),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordForm);
