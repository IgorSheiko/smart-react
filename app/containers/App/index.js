/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
import withProgressBar from 'components/ProgressBar';


export function App(props) {
  return (
    <div className="AppWrapper">
      <Helmet
        titleTemplate="%s - Battle.pro"
        defaultTitle="Battle.pro"
      />
      {React.Children.toArray(props.children)}
      <div className="turn-screen">
        <p>Пожалуйста, <br /> переверните устройство </p>
      </div>
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default withProgressBar(App);
