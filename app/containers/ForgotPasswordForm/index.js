import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'formsy-react';
import InputControl from 'components/InputControl';
import { forgotPasswordApi, checkEmailExist } from 'utils/api/requests';
import FormWrapper from './FormWrapper';

class ForgotPasswordForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canSubmit: false,
      sendEmailSuccecced: false,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.disableButton = this.disableButton.bind(this);
  }

  onSubmit(data, resetForm, invalidateForm) {
    checkEmailExist(data.email)
      .then((result) => {
        if (result.data.exists) {
          return forgotPasswordApi(data);
        }
        else {
          return Promise.reject({ emailExist: false });
        }
      })
      .then((result) => {
        this.setState({
          sendEmailSuccecced: true,
        });
      })
      .catch((error) => {
        if (!error.emailExist) {
          invalidateForm({
            email: 'Введите, пожалуйста, существующий е-мэйл',
          });
        }
      });
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
        {this.state.sendEmailSuccecced ?
            (
              <div className="row">
                <div className="col-sm-7 col-sm-offset-3">
                  <div className="reset-password">
                    <h2>Ссылка для восстановления пароля была отправлена на ваш e-mail.</h2>
                    <div>Пожалуйста, проверьте ваш e-mail и перейдите по ссылки для восстановления
                    пароля.</div>
                    <div>Если письмо не было получено, проверьте, пожалуйста, спам письма или
                    повторите процедуры еще раз.</div>
                  </div>
                </div>
              </div>
            ) :
            (
              <Form onSubmit={this.onSubmit} onValid={this.enableButton} onInvalid={this.disableButton} className="form-horizontal sign-form">
                <InputControl
                  className="form-group-white"
                  labelClassName="col-sm-3 control-label"
                  divClassName="col-sm-7"
                  name="email"
                  title="E-mail"
                  value=""
                  required
                  bottomErrorBox
                  validations={{
                    isEmail: true,
                  }}
                  validationErrors={{
                    isEmail: 'Введите, пожалуйста, правильный е-мэйл',
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
            )
          }

      </FormWrapper>
    );
  }
}
 /*
ForgotPasswordForm.propTypes = {
  signUpRequest: React.PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  countriesData: makeSelectCountries(),
});
*/
export default connect(null, null)(ForgotPasswordForm);
