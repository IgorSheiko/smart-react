import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Form } from 'formsy-react';
import axios from 'axios';

import { checkAuthExist } from 'utils/api/requests';
import { loginRequest } from 'pages/SignInPage/actions';

import InputControl from 'components/InputControl';

import messages from './messages';


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canSubmit: false,
      validationErrors: {},
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.disableButton = this.disableButton.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  onSubmit(data, resetForm, invalidateForm) {
    axios.all([checkAuthExist(data)])
      .then(axios.spread((response) => {
        if (response.data.exists === true) {
          this.props.loginRequest(data);
        }
        else {
          this.setState({
            validationErrors: {
              email: 'Неправильный логин/пароль',
            },
          });
          this.disableButton();
        }
      }));
  }

  validateForm(values) {
    if (!this.isEmpty(this.state.validationErrors)) {
      if (values.email && values.password) {
        this.setState({
          validationErrors: {},
        });
      }
    }
  }
  isEmpty(obj) {
    if (Object.values(obj).length === 0) {
      return true;
    }
    return false;
  }
  enableButton() {
    this.setState({ canSubmit: true });
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit} onValid={this.enableButton} onInvalid={this.disableButton} validationErrors={this.state.validationErrors} onChange={this.validateForm}>
        <div className="form-inline text-center login-fields">
          <InputControl
            placeholderText="Почта"
            className="form-group--start"
            inputClassName="form-control--start"
            value=""
            name="email"
            validations="isEmail"
            validationError="Неправильный формат адреса"
            required
            bottomErrorBox
          />
          <InputControl
            placeholderText="Пароль"
            className="form-group--start"
            inputClassName="form-control--start"
            value=""
            name="password"
            type="password"
            required
            bottomErrorBox
          />
          <a className="link-xs-grey forgot-password-link">
            <FormattedMessage tagName="i18n" {...messages.remind} />
          </a>
        </div>
        <div className="form-inline login-buttons">
          <div className="form-group form-group-checkbox form-group--start">
            <p>
              <input id="agree-keep-login" className="" type="checkbox" />
              <label htmlFor="agree-keep-login">
                <FormattedMessage tagName="i18n" {...messages.remember} />
              </label>
            </p>
          </div>
          <div className="form-group form-group--start form-group--enter">
            <button type="submit" disabled={!this.state.canSubmit} className="btn btn-default btn-lg text-center btn-rounded">
              <FormattedMessage tagName="i18n" {...messages.login} />
            </button>
          </div>
        </div>
      </Form>
    );
  }
}

LoginForm.propTypes = {
  loginRequest: React.PropTypes.func.isRequired,
};

export default connect(null, { loginRequest })(LoginForm);
