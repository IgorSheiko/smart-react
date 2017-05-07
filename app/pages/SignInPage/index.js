import React, { Component } from 'react';
import Helmet from 'react-helmet';

import StarterLayout from 'components/StarterLayout';
import Man from 'components/Man';
import Login from 'components/Login';
import SocialLogin from 'components/SocialLogin';
import LoginForm from 'containers/LoginForm';
import RegistrationBtn from 'components/RegistrationBtn';

export class SignInPage extends Component {
  render() {
    return (
      <StarterLayout>
        <Helmet
          title="LoginPage"
          meta={[
            { name: 'description', content: 'Description of LoginPage' },
          ]}
        />
        <Login>
          <SocialLogin />
          <LoginForm />
          <RegistrationBtn />
        </Login>
      </StarterLayout>
    );
  }
}

export default SignInPage;
