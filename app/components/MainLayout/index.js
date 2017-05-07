import React from 'react';
import Footer from 'components/Footer';
import Header from 'components/Header';

function MainLayout(props) {
  return (
    <div className="page menu-page">
      <Header
        userRole={props.userRole}
      />
      { props.children }
      <Footer withGradLine />
    </div>
  );
}

export default MainLayout;
