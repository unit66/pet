import React from 'react';
import DesktopNavigation from './DesktopNavigation'
import MobileNavigation from './MobileNavigation'

export default function Header() {
  return (
    <header>
      <DesktopNavigation />
      <MobileNavigation />
    </header>
  );
}
