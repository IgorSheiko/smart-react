import React from 'react';
import { FormattedMessage } from 'react-intl';
import StyledFooterLogo from './StyledFooterLogo';

import messages from './messages';

function Footer(props) {
  const withGradLine = props.withGradLine || false;

  return (
    <footer>
      { withGradLine ? (<div className="grad-line" />) : (<div />) }
      <div className="container">
        <div className="row">
          <div className="col-xs-5 col-sm-6">
          </div>
          <div className="col-xs-7 col-sm-6">
            <p className="text-right footer__text">
              <FormattedMessage tagName="i18n" {...messages.licenseMessage} />
              <br />
              <FormattedMessage tagName="i18n" {...messages.rightsMessage} />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
