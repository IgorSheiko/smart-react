import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import HeaderLogo from 'components/HeaderLogo';

import messages from './messages';

function HotLinks() {
  return (
    <nav className="hotlinks text-right">
      <ul className="wrap">
        {
          [<HeaderLogo />,
            <Link to="/search_duels">
              <FormattedMessage tagName="i18n" {...messages.negotiationsSearch} />
            </Link>,
            <Link to="/question">
              <FormattedMessage tagName="i18n" {...messages.question} />
            </Link>,
            <Link to="/rules">
              <FormattedMessage tagName="i18n" {...messages.rules} />
            </Link>].map((item, index) => (
              <li key={index}>
                {item}
              </li>
          ))
        }
      </ul>
    </nav>
  );
}

export default HotLinks;
