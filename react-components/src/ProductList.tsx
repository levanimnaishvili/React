import Product from './Product';
import React from 'react';
import { TStateProps } from './Home';
import classes from './ProductList.module.css';

type TProps = {
  items: TStateProps[];
};
export default class ProductList extends React.Component<TProps> {
  constructor(props: TProps) {
    super(props);

  }
  render() {
    const {items} = this.props;
    return (
      <ul className={classes['item-list']}>
        {items.map((item) => <Product key={item.id} {...item}/>)}
      </ul>
    );
  }
}

// [].map(el => < key='unique' title=el.property ... ></>)