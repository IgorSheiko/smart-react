import React, { Component } from 'react';
import { Decorator as FormsyElement } from 'formsy-react';

@FormsyElement()
class DayCheckboxControl extends Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(event) {
    if (event.currentTarget.checked) {
      this.props.setValue(event.currentTarget.checked);
      this.props.setValue(this.props.id);
      this.props.changeDisable(true);
    }
    else {
      this.props.setValue(event.currentTarget.unchecked);
      this.props.changeDisable(false);
    }
  }

  render() {
    const className = 'form-group  form-group-checkbox ' + (this.props.className || ' ') +
      (this.props.showRequired() ? ' required' : this.props.showError() ? ' error' : '');

    const errorMessage = this.props.getErrorMessage();
    const labelClassName = this.props.labelClassName || '';

    const errorClassName = 'error-container' + (this.props.bottomErrorBox ? ' error-container-bottom' : '');

    return (
      <div className={className}>
        <input
          id={this.props.id}
          type="checkbox"
          name={this.props.name}
          defaultChecked={this.props.defaultChecked}
          onChange={this.changeValue}
        />

        <label htmlFor={this.props.id} className={labelClassName}>
          {this.props.title}&nbsp;
        </label>
        <div className={errorClassName}>
          <span>{errorMessage}</span>
        </div>
      </div>
    );
  }
}

DayCheckboxControl.propTypes = {
  name: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired,
  className: React.PropTypes.string,
  labelClassName: React.PropTypes.string,
  title: React.PropTypes.string,
  bottomErrorBox: React.PropTypes.bool,
  defaultChecked: React.PropTypes.bool,
  changeDisable: React.PropTypes.func.isRequired,
};


export default DayCheckboxControl;
