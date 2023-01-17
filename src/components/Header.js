import React from 'react';
import SiteTitle from './SiteTitle';
import Navbar from './Navbar';

const Header = () => {
  const headerStyle = {
    padding: '10px 50px',
    lineHeight: '1.5em',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0a0a23',
    color: '#fff',
    borderBottom: '4px solid #fdb347',
  };

  return (
    <header style={headerStyle}>
      <SiteTitle />
      <Navbar />
    </header>
  );
};

export default Header;
