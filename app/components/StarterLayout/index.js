import React from 'react';
import { FormattedMessage } from 'react-intl';

import Footer from 'components/Footer';
import StyledStarterLayout from './StyledStarterLayout';

import messages from './messages';

function StarterLayout(props) {
  return (
    <StyledStarterLayout className="page">
      <header>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 text-center">
              <div className="header__heading-before text-left">
                <span>
                  <FormattedMessage tagName="i18n" {...messages.firstLine} />
                </span>
              </div>
              <h1 className="header__heading">SmartHome</h1>
              <div className="header__heading-after text-right">
                <span>
                  <FormattedMessage tagName="i18n" {...messages.secondLine} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      { props.children }
      <Footer />
    </StyledStarterLayout>
  );
}

export default StarterLayout;
