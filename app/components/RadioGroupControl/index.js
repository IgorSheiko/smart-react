import React, { Component } from 'react';
import { Decorator as FormsyElement } from 'formsy-react';

@FormsyElement()
class RadioGroupControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.changeValue = this.changeValue.bind(this);
  }

  componentWillMount() {
    const value = this.props.value;
    this.props.setValue(value);
    this.setState({ value });
  }

  changeValue(event) {
    const value = event.currentTarget.id;
    this.props.setValue(value);
    this.setState({ value });
  }

  render() {
    const { name, items, className } = this.props;

    return (
      <div className={className}>
        {items.map((item, i) => (
          <div key={i} className={item.divClassName} style={item.style} >
            <input
              type="radio"
              name={name}
              id={item.label}
              onChange={this.changeValue}
              checked={this.state.value === item.label}
            />
            <label htmlFor={item.label} className={item.labelClassName}>
              {item.title}
            </label>
          </div>
        ))
        }
      </div>
    );
  }
}

RadioGroupControl.propTypes = {
  value: React.PropTypes.string,
  items: React.PropTypes.array,
  name: React.PropTypes.string,
  className: React.PropTypes.string,
};

export default RadioGroupControl;
