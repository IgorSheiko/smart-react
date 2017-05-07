import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function ConfirmedDuelsTable(props) {
  return (
    <table className="table table-strip">
      <thead>
        <tr>
          <th>
            <FormattedMessage tagName="i18n" {...messages.duelname} />
          </th>
          <th>
            <FormattedMessage tagName="i18n" {...messages.dueltime} />
          </th>
          <th>
            <FormattedMessage tagName="i18n" {...messages.dueldate} />
          </th>
        </tr>
      </thead>
      <tbody>
        {props.children}
      </tbody>
    </table>
  );
}

export default ConfirmedDuelsTable;
