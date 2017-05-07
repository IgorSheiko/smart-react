import React from 'react';

function Menu(props) {
  return (
    <nav className="menu">
      <div className="wrap clearfix">
        { props.children }
      </div>
    </nav>
  );
}

export default Menu;
