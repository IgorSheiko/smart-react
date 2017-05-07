import React, { Component } from 'react';
import { Decorator as FormsyElement } from 'formsy-react';

@FormsyElement()
class CheckboxControl extends Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(event) {
    if (event.currentTarget.checked) {
      this.props.setValue(event.currentTarget.checked);
    }
    else {
      this.props.setValue(event.currentTarget.unchecked);
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
          value={this.props.getValue()}
          onChange={this.changeValue}
          defaultChecked={false}
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

CheckboxControl.propTypes = {
  name: React.PropTypes.string.isRequired,
  id: React.PropTypes.string,
  className: React.PropTypes.string,
  labelClassName: React.PropTypes.string,
  title: React.PropTypes.string,
  bottomErrorBox: React.PropTypes.bool,
};

export default CheckboxControl;
