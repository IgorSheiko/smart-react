import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';

import messages from './messages';

function RegistrationBtn() {
  return (
    <div className="form-group text-center">
      <Link to="/sign_up" className="btn btn-danger btn-lg text-center btn-rounded btn-reg" >
        <FormattedMessage tagName="i18n" {...messages.registration} />
      </Link>
    </div>
  );
}

export default RegistrationBtn;
