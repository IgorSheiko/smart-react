import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import { Decorator as FormsyElement } from 'formsy-react';
import moment from 'moment';

@FormsyElement()
class DatePickerControl extends Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(data) {
    if (!this.props.Utc) {
      const date = `${data.date()}.${data.month() + 1}.${data.year()}`;
      moment.utc(date, 'DD.MM.YYYY');
      this.props.setValue(moment.utc(date, 'DD.MM.YYYY'));
    }
    else {
      this.props.setValue(data);
    }
  }

  render() {
    const className = 'form-group ' + (this.props.className || ' ') +
      (this.props.showRequired() ? ' required' : this.props.showError() ? ' error' : '');

    const errorMessage = this.props.getErrorMessage();
    const divClassName = this.props.divClassName || '';
    const labelClassName = this.props.labelClassName || '';

    const errorClassName = 'error-container' + (this.props.bottomErrorBox ? ' error-container-bottom' : '');

    return (
      <div className={className}>
        <label htmlFor={this.props.name} className={labelClassName}>
          {this.props.title}
        </label>
        <div className={divClassName}>
          <DatePicker
            fixedHeight
            selected={this.props.getValue()}
            maxDate={this.props.maxDate}
            minDate={this.props.minDate}
            onChange={this.changeValue}
            className="form-control"
            name={this.props.name}
            placeholderText={this.props.placeholderText}
            dateFormat="DD.MM.YYYY"
            peekNextMonth
            showMonthDropdown
            showYearDropdown
          />
          <div className={errorClassName}>
            <span>{errorMessage}</span>
          </div>
        </div>
      </div>
    );
  }
}

DatePickerControl.propTypes = {
  name: React.PropTypes.string.isRequired,
  className: React.PropTypes.string,
  divClassName: React.PropTypes.string,
  labelClassName: React.PropTypes.string,
  placeholderText: React.PropTypes.string,
  title: React.PropTypes.string,
  bottomErrorBox: React.PropTypes.bool,
  maxDate: React.PropTypes.object,
  Utc: React.PropTypes.bool,
};

export default DatePickerControl;
