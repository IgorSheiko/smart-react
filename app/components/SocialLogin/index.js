import React from 'react';
import { FormattedMessage } from 'react-intl';

import ConnectVk from './ConnectVk';
import ConnectFb from './ConnectFb';
import messages from './messages';

function SocialLogin() {
  const style = {
    marginBottom: 0,
    marginTop: 5,
  }
  return (
    <div className="text-center">
      <ConnectVk href="#" className="login-connect" />
      <ConnectFb href="#" className="login-connect" />
      <p className="text-center text-white" style={style}>
        <FormattedMessage tagName="i18n" {...messages.or} />
      </p>
    </div>
  );
}


export default SocialLogin;
