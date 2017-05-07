import React, { Component } from 'react';
import { Decorator as FormsyElement } from 'formsy-react';

@FormsyElement()
class InputControl extends Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(event) {
    const value = event.currentTarget.value;
    this.props.setValue(value);
  }

  render() {
    const className = 'form-group ' + (this.props.className || ' ') +
      (this.props.showRequired() ? ' required' : this.props.showError() ? ' error' : '');

    const errorMessage = this.props.getErrorMessage();
    const divClassName = this.props.divClassName || '';
    const labelClassName = this.props.labelClassName || '';
    const inputClassName = 'form-control ' + (this.props.inputClassName ? this.props.inputClassName : '');
    const errorClassName = 'error-container' + (this.props.bottomErrorBox ? ' error-container-bottom' : '');

    return (
      <div className={className}>
        <label htmlFor={this.props.name} className={labelClassName}>
          {this.props.title}
        </label>
        <div className={divClassName}>
          <input
            autoComplete="off"
            placeholder={this.props.placeholderText}
            className={inputClassName}
            type={this.props.type || 'text'}
            name={this.props.name}
            onChange={this.changeValue}
            value={this.props.getValue()}
          />
          <div className={errorClassName}>
            <span>{errorMessage}</span>
          </div>
        </div>

      </div>
    );
  }
}

InputControl.propTypes = {
  name: React.PropTypes.string.isRequired,
  className: React.PropTypes.string,
  divClassName: React.PropTypes.string,
  labelClassName: React.PropTypes.string,
  inputClassName: React.PropTypes.string,
  placeholderText: React.PropTypes.string,
  title: React.PropTypes.string,
  type: React.PropTypes.string,
  bottomErrorBox: React.PropTypes.bool,
};

export default InputControl;
