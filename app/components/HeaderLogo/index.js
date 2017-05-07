import React from 'react';
import { Link } from 'react-router';
import HeaderLogoPic from './4.png';

function HeaderLogo() {
  return (
    <Link to="/">
      <img src={HeaderLogoPic} alt="HeaderLogo" />
    </Link>
  );
}

export default HeaderLogo;
