import React, {Component} from 'react';
import DesktopNavigation from './DesktopNavigation'
import MobileNavigation from './MobileNavigation'

export default class Header extends Component{
  constructor() {
    super()
    this.state = {
      active: false
    }
  }

  toggleNavigation = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      return {
        active: !prevState.active,
      }
    })
  }

  render() {
    return (
      <header className={ this.state.active ? "active" : "inactive" }>
        <a href="#" onClick={ this.toggleNavigation } className="toggleMenu">
          { this.state.active ? <i className="material-icons">
            close
          </i> : <i className="material-icons">
            menu
          </i> }

        </a>
        <DesktopNavigation/>
      </header>
    );
  }
}
