import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import { makeSelectCurrentUser } from 'containers/App/selectors';
import { logoutRequest } from 'pages/DashboardPage/actions';
import { hasAvatar } from 'utils/helpers/avatarHelper';
import messages from './messages';

export class UserPanel extends Component {

  render() {
    if (!this.props.user) {
      return null;
    }
    return (
      <ul className="fl-right">
        <li>
          <div className="private-box">
            <span className="private-box__info">
              <p>{this.props.user.profile.first_name} {this.props.user.profile.last_name}</p>
              <Link to="/" className="private-box__link" onClick={() => this.props.logoutRequest()}>
                <FormattedMessage tagName="i18n" {...messages.exit} />
              </Link>
            </span>
          </div>
        </li>
        <li>
          <i className="fa fa-envelope" aria-hidden="true"></i>
        </li>
        <li>
          <i className="fa fa-cog" aria-hidden="true"></i>
        </li>
      </ul>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  user: makeSelectCurrentUser(),
});

export default connect(mapStateToProps, { logoutRequest })(UserPanel);
