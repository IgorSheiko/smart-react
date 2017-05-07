import React, { Component } from 'react';
import Helmet from 'react-helmet';

import StarterLayout from 'components/StarterLayout';
import ForgotPasswordForm from 'containers/ForgotPasswordForm';

export class ForgotPasswordPage extends Component {
  render() {
    return (
      <StarterLayout>
        <Helmet
          title="ForgotPasswordPage"
          meta={[
            { name: 'description', content: 'Description of ForgotPasswordPage' },
          ]}
        />
        <ForgotPasswordForm />
      </StarterLayout>
    );
  }
}

export default ForgotPasswordPage;
