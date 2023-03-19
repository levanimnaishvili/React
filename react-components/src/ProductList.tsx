import Product from './Product';
import React from 'react';

const dumyProductList = [
  {
    id: '1130980981',
    sku: 'asd940asd0',
    title: 'Product1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, corporis.',
    image:
      'https://alpha.aeon.co/images/acd6897d-9849-4188-92c6-79dabcbcd518/header_essay-final-gettyimages-685469924.jpg',
    price: 450,
  },
  {
    id: 'asda3134455',
    sku: 'asd940sadaasd0',
    title: 'Product2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, corporis.',
    image:
      'https://alpha.aeon.co/images/acd6897d-9849-4188-92c6-79dabcbcd518/header_essay-final-gettyimages-685469924.jpg',
    price: 450,
  },
  {
    id: '1130980q11454981',
    sku: 'asd940asdagaasd0',
    title: 'Product3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, corporis.',
    image:
      'https://alpha.aeon.co/images/acd6897d-9849-4188-92c6-79dabcbcd518/header_essay-final-gettyimages-685469924.jpg',
    price: 450,
  },
  {
    id: '113094567480981',
    sku: 'asd9asdaas40asd0',
    title: 'Product4',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, corporis.',
    image:
      'https://alpha.aeon.co/images/acd6897d-9849-4188-92c6-79dabcbcd518/header_essay-final-gettyimages-685469924.jpg',
    price: 450,
  },
];

export default class ProductList extends React.Component {
  render() {
    return (
      <ul>
        <Product
          id={dumyProductList[0].id}
          title={dumyProductList[0].title}
          description={dumyProductList[0].description}
          image={dumyProductList[0].image}
          sku={dumyProductList[0].sku}
          price={dumyProductList[0].price}
        />
      </ul>
    );
  }
}

// [].map(el => < key='unique' title=el.property ... ></>)