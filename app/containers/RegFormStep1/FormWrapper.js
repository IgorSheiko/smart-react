import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

function FormWrapper(props) {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12">
            <div className="row">
              <div className="col-sm-7 col-sm-offset-3">
                <h2 className="sign-header-2">
                  <FormattedMessage tagName="i18n" {...messages.headername} />
                </h2>
                <h3 className="sign-header-3">
                  <FormattedMessage tagName="i18n" {...messages.stepnumber} />
                </h3>
              </div>
            </div>
            { props.children }
          </div>
        </div>
      </div>
    </section>
  );
}


export default FormWrapper;
