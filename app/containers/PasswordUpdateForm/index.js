import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Form } from 'formsy-react';
import { createStructuredSelector } from 'reselect';
import LaddaButton, { S, SLIDE_UP } from 'react-ladda';
import { checkPasswordValid } from 'utils/api/requests';
import { makeSelectCurrentUser } from 'containers/App/selectors';
import { makeSelectIsLoadingPasswordUpdateFormData } from 'pages/DashboardPage/selectors';
import { passwordUpdateRequest } from 'pages/DashboardPage/actions';

import InputControl from 'components/InputControl';
import messages from './messages';


export class PasswordUpdateForm extends Component {
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
    checkPasswordValid(data.current_password)
      .then((pwd) => {
        if (pwd.data.valid === false) {
          invalidateForm({
            current_password: 'Неправильный пароль',
          });
        }
        else {
          data.id = this.props.user.id;
          this.props.passwordUpdateRequest(data);
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
      <Form onSubmit={this.onSubmit} onValid={this.enableButton} onInvalid={this.disableButton} className="form-horizontal">
        <InputControl
          className="form-group"
          labelClassName="col-sm-3 control-label"
          divClassName="col-sm-9"
          name="current_password"
          title="Текущий пароль"
          type="password"
          value=""
          required
        />

        <InputControl
          className="form-group"
          labelClassName="col-sm-3 control-label"
          divClassName="col-sm-9"
          name="password"
          title="Установить новый пароль"
          type="password"
          value=""
          required
          validations="minLength:8"
          validationErrors={{
            minLength: 'Минимальная длина пароля 8 символов',
          }}
        />

        <InputControl
          className="form-group"
          labelClassName="col-sm-3 control-label"
          divClassName="col-sm-7"
          name="password_confirmation"
          title="Подтвердите Пароль"
          type="password"
          value=""
          required
          validations="equalsField:password"
          validationErrors={{
            equalsField: 'Пароли не совпадают',
          }}
        />

        <div className="form-group mt20">
          <div className="col-sm-offset-3 col-sm-7">
            <LaddaButton
              loading={this.props.isLoading}
              type="submit"
              disabled={!this.state.canSubmit || this.props.isLoading}
              className="btn btn-danger-dark"
              data-size={S}
              data-style={SLIDE_UP}
              data-spinner-size={30}
              data-spinner-color="#ddd"
              data-spinner-lines={12}
            >
              <FormattedMessage tagName="i18n" {...messages.save} />
            </LaddaButton>
          </div>
        </div>
      </Form>
    );
  }
}

PasswordUpdateForm.propTypes = {
  passwordUpdateRequest: React.PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectCurrentUser(),
  isLoading: makeSelectIsLoadingPasswordUpdateFormData(),
});

export default connect(mapStateToProps, { passwordUpdateRequest })(PasswordUpdateForm);
