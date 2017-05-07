import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Form } from 'formsy-react';
import axios from 'axios';
import { Link } from 'react-router';
import moment from 'moment';
import { createStructuredSelector } from 'reselect';
import { checkEmailExist, checkPhoneNumberExist } from 'utils/api/requests';
import InputControl from 'components/InputControl';
import SelectControl from 'components/SelectControl';
import DatePickerControl from 'components/DatePickerControl';
import { signUpRequest } from 'pages/SignUpPage/actions';
import { PUBLIC_OFFER_PATH } from 'utils/api/paths';
import { makeSelectCountries } from 'pages/SignUpPage/selectors';
import messages from './messages';
import FormWrapper from './FormWrapper';

class RegFormStep1 extends Component {
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
    axios.all([checkEmailExist(data.email), checkPhoneNumberExist(data.profile.phone_number)])
      .then(axios.spread((responseEmail, responsePhoneNumber) => {
        let validForm = true;
        if (responseEmail.data.exists === true) {
          validForm = false;
          invalidateForm({
            email: 'Такой е-мэйл уже существует',
          });
          this.disableButton();
        }
        if (responsePhoneNumber.data.exists === true) {
          validForm = false;
          invalidateForm({
            'profile.phone_number': 'Такой номер уже существует',
          });
          this.disableButton();
        }
        if (validForm) {
          this.props.signUpRequest(data);
        }
      }));
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
        <Form onSubmit={this.onSubmit} onValid={this.enableButton} onInvalid={this.disableButton} className="form-horizontal sign-form">

          <InputControl
            className="form-group-white"
            labelClassName="col-sm-3 control-label"
            divClassName="col-sm-7"
            name="profile.first_name"
            title="Имя"
            value=""
            required
            bottomErrorBox
            validations={{
              matchRegexp: /[\u0410-\u0451\u0041-\u005a\u0061-\u007a]/i,
              maxLength: 50,
            }}
            validationErrors={{
              maxLength: 'Можно использовать не более 50 символов',
              matchRegexp: 'Только буквы могут использоваться для заполнения данного поля',
            }}
          />

          <InputControl
            className="form-group-white"
            labelClassName="col-sm-3 control-label"
            divClassName="col-sm-7"
            name="profile.last_name"
            title="Фамилия"
            value=""
            required
            bottomErrorBox
            validations={{
              matchRegexp: /[\u0410-\u0451\u0041-\u005a\u0061-\u007a]/i,
              maxLength: 50,
            }}
            validationErrors={{
              maxLength: 'Можно использовать не более 50 символов',
              matchRegexp: 'Только буквы могут использоваться для заполнения данного поля',
            }}

          />

          <SelectControl
            className="form-group-white"
            labelClassName="col-sm-3 control-label"
            divClassName="col-sm-7"
            name="profile.sex"
            title="Пол"
            required
            options={[
              { value: 'man', label: 'Мужчина' },
              { value: 'woman', label: 'Женщина' },
            ]}
          />

          <DatePickerControl
            className="form-group-white"
            labelClassName="col-sm-3 control-label"
            divClassName="col-sm-4"
            name="profile.birth_date"
            title="Год и дата рождения"
            value=""
            maxDate={moment().subtract(16, 'years')}
            required
          />

          <InputControl
            className="form-group-white"
            labelClassName="col-sm-3 control-label"
            divClassName="col-sm-7"
            name="profile.phone_number"
            title="Номер мобильного телефона"
            value=""
            required
            bottomErrorBox
            validations={{
              isNumeric: true,
            }}
            validationErrors={{
              isNumeric: 'Введите, пожалуйста, правильный номер телефона',
            }}
          />

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
        <div className="password-fields-inline clearfix">

            <InputControl
              className="form-group-white"
              labelClassName="col-sm-3 control-label"
              divClassName="col-sm-2"
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
              labelClassName="col-sm-6 control-label"
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
          </div>
          <div className="form-group">
            <div className="col-sm-offset-3 col-sm-7">
              <button type="submit" disabled={!this.state.canSubmit} className="btn btn-danger-dark">
                Далее
              </button>
            </div>
          </div>
        </Form>

      </FormWrapper>
    );
  }
}

RegFormStep1.propTypes = {
  signUpRequest: React.PropTypes.func.isRequired,
};


export default connect(null, { signUpRequest })(RegFormStep1);
