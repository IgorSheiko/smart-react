import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function DisagreedCasesTable(props) {
  return (
    <table className="table table-strip">
      <thead>
        <tr>
          <th>
            <FormattedMessage tagName="i18n" {...messages.case} />
          </th>
          <th>
            <FormattedMessage tagName="i18n" {...messages.number} />
          </th>
          <th>
            <FormattedMessage tagName="i18n" {...messages.theme} />
          </th>
          <th>
            <FormattedMessage tagName="i18n" {...messages.status} />
          </th>
          <th>
            <FormattedMessage tagName="i18n" {...messages.actions} />
          </th>
        </tr>
      </thead>
      <tbody>
        {props.children}
      </tbody>
    </table>
  );
}

export default DisagreedCasesTable;
