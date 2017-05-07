import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import messages from './messages';


function AddCaseLink() {
  return (
    <Link to="/new_case" className="btn btn-rounded btn-mazarine btn-low fl-right">
      <FormattedMessage tagName="i18n" {...messages.addcase} />
    </Link>
  );
}

export default AddCaseLink;
