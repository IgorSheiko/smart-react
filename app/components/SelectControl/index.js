import React, { Component } from 'react';
import { Decorator as FormsyElement } from 'formsy-react';
import Select from 'react-select';

@FormsyElement()
class SelectControl extends Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(value) {
    if (this.props.multiple) {
      this.props.setValue(value.map((option) => option.value));
    }
    else {
      this.props.setValue(value.value);
    }
  }

  render() {
    const className = 'form-group ' + (this.props.className || ' ') +
      (this.props.showRequired() ? ' required' : this.props.showError() ? ' error' : '');
    const errorMessage = this.props.getErrorMessage();
    const divClassName = this.props.divClassName || '';
    const labelClassName = this.props.labelClassName || '';

    return (
      <div className={className}>
        <label htmlFor={this.props.name} className={labelClassName}>
          {this.props.title}
        </label>
        <div className={divClassName}>
          <Select
            placeholder="Выбрать..."
            name={this.props.name}
            onChange={this.changeValue}
            value={this.props.getValue()}
            options={this.props.options}
            multi={this.props.multiple}
            clearable={false}
          />

          <div className="error-container">
            <span>{errorMessage}</span>
          </div>
        </div>
      </div>
    );
  }
}

SelectControl.propTypes = {
  name: React.PropTypes.string.isRequired,
  options: React.PropTypes.array.isRequired,
  className: React.PropTypes.string,
  divClassName: React.PropTypes.string,
  labelClassName: React.PropTypes.string,
  title: React.PropTypes.string,
  multiple: React.PropTypes.bool,
};

export default SelectControl;
