import React, { Component } from 'react';
import Helmet from 'react-helmet';

import StarterLayout from 'components/StarterLayout';
import RegFormStep1 from 'containers/RegFormStep1';

export class SignUpPage extends Component {
  render() {
    return (
      <StarterLayout>
        <Helmet
          title="SignUpPage"
          meta={[
            { name: 'description', content: 'Description of SignUpPage' },
          ]}
        />
        <RegFormStep1 />
      </StarterLayout>
    );
  }
}

export default SignUpPage;
