import React, { Component } from 'react';
import Menu from 'components/Menu';
import HotLinks from 'components/HotLinks';
import NavigationPanel from 'components/NavigationPanel';
import UserPanel from 'containers/UserPanel';
import HamburgerImage from './hamburger.png';
import CloseIconImg from './close-lg.png';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.closeMenu = this.closeMenu.bind(this);
    this.openMenu = this.openMenu.bind(this);
    this.state = {
      className: 'closed-mobile-nav',
    };
  }

  closeMenu() {
    this.setState({
      className: 'closed-mobile-nav',
    });
  }

  openMenu() {
    this.setState({
      className: 'opened-mobile-nav',
    });
  }

  render() {
    return (
      <header className={this.state.className}>
        <HotLinks />
        <Menu>
          <NavigationPanel
            userRole={this.props.userRole}
          />
          <UserPanel />
        </Menu>
        <div className="menuh" onClick={this.openMenu}>
          <img src={HamburgerImage} alt="OpenMenuIcon" />
        </div>
        <div className="close-menu" onClick={this.closeMenu}>
          <img src={CloseIconImg} alt="CloseIcon" />
        </div>
      </header>
    );
  }
}
export default Header;
