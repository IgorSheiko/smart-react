import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Form } from 'formsy-react';
import { createStructuredSelector } from 'reselect';
import LaddaButton, { S, SLIDE_UP } from 'react-ladda';
import { checkEmailExist } from 'utils/api/requests';
import { makeSelectCurrentUser } from 'containers/App/selectors';
import { makeSelectCountries, makeSelectIsLoadingUserDataUpdateFormData } from 'pages/DashboardPage/selectors';
import { profileUpdateRequest } from 'pages/DashboardPage/actions';

import moment from 'moment';
import InputControl from 'components/InputControl';
import SelectControl from 'components/SelectControl';
import DatePickerControl from 'components/DatePickerControl';

import messages from './messages';

export class UserDataUpdateForm extends Component {
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
    checkEmailExist(data.email, data.email)
      .then((email) => {
        if (email.data.exists === true) {
          invalidateForm({
            email: 'Такой е-мэйл уже используется',
          });
        }
        else {
          data.id = this.props.user.id;
          this.props.profileUpdateRequest(data);
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
    if (!this.props.user) {
      return null;
    }
    return (
      <Form onSubmit={this.onSubmit} onValid={this.enableButton} onInvalid={this.disableButton} className="form-horizontal">
        <InputControl
          className="form-group"
          labelClassName="col-sm-3 control-label"
          divClassName="col-sm-9"
          name="profile.first_name"
          title="Имя"
          value={this.props.user.profile.first_name}
          required
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
          className="form-group"
          labelClassName="col-sm-3 control-label"
          divClassName="col-sm-9"
          name="profile.last_name"
          title="Фамилия"
          value={this.props.user.profile.last_name}
          required
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
          className="form-group"
          labelClassName="col-sm-3 control-label"
          divClassName="col-sm-7"
          name="profile.sex"
          title="Пол"
          required
          value={this.props.user.profile.sex}
          options={[
            { value: 'man', label: 'Мужчина' },
            { value: 'woman', label: 'Женщина' },
          ]}
        />

        <DatePickerControl
          className="form-group"
          labelClassName="col-sm-3 control-label"
          divClassName="col-sm-4"
          name="profile.birth_date"
          title="Год и дата рождения"
          value={moment.utc(this.props.user.profile.birth_date, 'DD.MM.YYYY')}
          maxDate={moment().subtract(16, 'years')}
        />

        <InputControl
          className="form-group"
          labelClassName="col-sm-3 control-label"
          divClassName="col-sm-9"
          name="profile.phone_number"
          title="Номер мобильного телефона"
          placeholderText="+7(878)789-45-45"
          value={this.props.user.profile.phone_number}
          required
          validations={{
            isNumeric: true,
          }}
          validationErrors={{
            isNumeric: 'Введите, пожалуйста, правильный номер телефона',
          }}
        />

        <InputControl
          className="form-group"
          labelClassName="col-sm-3 control-label"
          divClassName="col-sm-9"
          name="email"
          title="E-mail"
          value={this.props.user.email}
          required
          validations={{
            isEmail: true,
          }}
          validationErrors={{
            isEmail: 'Введите, пожалуйста, правильный е-мэйл',
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

UserDataUpdateForm.propTypes = {
  profileUpdateRequest: React.PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectCurrentUser(),
  isLoading: makeSelectIsLoadingUserDataUpdateFormData(),
});

export default connect(mapStateToProps, { profileUpdateRequest })(UserDataUpdateForm);
