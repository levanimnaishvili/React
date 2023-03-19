import React from 'react';
import { Outlet, Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  render(): React.ReactNode {
    return <>
    <h1>Header</h1>
    <Link to='/about'>About</Link>
    <Link to='/'>Home</Link>
    <Outlet />
    </>;
  }
}

export default Header;