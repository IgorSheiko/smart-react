import React from 'react';
import { Link } from 'react-router';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function NavigationPanel(props) {
  let menuLinks = null;
  if (props.userRole === 'tutor') {
    menuLinks = (
      <ul className="fl-left">
        <li className="menuhidden">
          <Link to="/">
            <FormattedMessage tagName="i18n" {...messages.dashboard} />
          </Link>
        </li>
        <li className="menuhidden">
          <Link to="/cases_manage">
            <FormattedMessage tagName="i18n" {...messages.manageCases} />
          </Link>
        </li>
        <li className="menuhidden">
          <Link to="/duels_video">
            <FormattedMessage tagName="i18n" {...messages.duelsVideo} />
          </Link>
        </li>
        <li className="menuhidden">
          <Link to="/analysis_sheets">
            <FormattedMessage tagName="i18n" {...messages.analysisSheets} />
          </Link>
        </li>
      </ul>
    );
  }
  else {
    menuLinks = (
      <ul className="fl-left">
        <li className="menuhidden">
          <Link to="/">
            <FormattedMessage tagName="i18n" {...messages.dashboard} />
          </Link>
        </li>
        <li className="menuhidden">
          <Link to="/project_new">
            <FormattedMessage tagName="i18n" {...messages.negotiations} />
          </Link>
        </li>
        <li className="menuhidden">
          <Link to="/projects">
            <FormattedMessage tagName="i18n" {...messages.cases} />
          </Link>
        </li>
      </ul>
    );
  }
  return (
    menuLinks
  );
}

export default NavigationPanel;
