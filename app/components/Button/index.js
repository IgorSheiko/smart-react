import React, { Component } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

class Button extends Component {

  render() {
    return (
      <Link to={this.props.link} className="btn btn-rounded btn-mazarine btn-low fl-right">
        <FormattedMessage tagName="i18n" {...this.props.message} />
      </Link>
    );
  }
}

export default Button;
