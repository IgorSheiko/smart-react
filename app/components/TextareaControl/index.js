import React, { Component } from 'react';
import { Decorator as FormsyElement } from 'formsy-react';

@FormsyElement()
class TextareaControl extends Component {
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
    const textareaClassName = 'form-control ' + (this.props.textareaClassName ? this.props.textareaClassName : '');
    const errorClassName = 'error-container' + (this.props.bottomErrorBox ? ' error-container-bottom' : '');

    return (
      <div className={className}>
        <label className={labelClassName}>
          {this.props.title}
        </label>
        <div className={divClassName}>
          <textarea
            autoComplete="off"
            placeholder={this.props.placeholderText}
            className={textareaClassName}
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

TextareaControl.propTypes = {
  value: React.PropTypes.string.isRequired,
  className: React.PropTypes.string,
  divClassName: React.PropTypes.string,
  labelClassName: React.PropTypes.string,
  textareaClassName: React.PropTypes.string,
  placeholderText: React.PropTypes.string,
  title: React.PropTypes.string,
  bottomErrorBox: React.PropTypes.bool,
};

export default TextareaControl;
