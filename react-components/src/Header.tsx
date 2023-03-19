import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import classes from './Header.module.css';

class Header extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <div className={classes.wrapper}>
        <h1>Brand Shop</h1>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/">Home</Link>
        </nav>

        <Outlet />
      </div>
    );
  }
}

export default Header;
