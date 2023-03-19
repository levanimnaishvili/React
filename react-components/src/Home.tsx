import ProductList from './ProductList';
import React from 'react';
import Search from './Search';

class Home extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  render(): React.ReactNode {
    return <>
    <h1>Home Page</h1>
    <Search />
    <ProductList />
    </>;
  }
}

export default Home;