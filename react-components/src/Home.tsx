import ProductList from './ProductList';
import React from 'react';
import Search from './Search';

export type TStateProps = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

type TState = {
  defaultState: TStateProps[];
  searchState: TStateProps[];
};

class Home extends React.Component {
  constructor(props: {}) {
    super(props);
    this.updateBySearch = this.updateBySearch.bind(this);
  }
  state: TState = {searchState: [], defaultState: [] };
  componentDidMount(): void {
    const filterBy = localStorage.getItem('search-value');
    let searchState: TStateProps[] = [];
    if (filterBy) {
      let filterValue = filterBy.toString().toLowerCase();
      searchState = this.state.defaultState.filter((item: TStateProps) => {
        Object.values(item).reduce((curr: boolean, value: string | number) => {
          return curr ? curr : value.toString().toLowerCase().includes(filterValue);
        }, false);
      });
      this.setState({ ...this.state, searchState });
    } else {
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data) => {
          this.setState({searchTimer:null, searchState: data, defaultState: data });
        });
    }
    console.log('mount');
  }

  updateBySearch(value: string) {
    const foundProducts = this.state.defaultState.filter((product) => {
        let productValidator = false;
        Object.values(product).forEach((prop) => {
          let isSearchBarEmpty = !(value.toString().trim().length > 0);
          let isSearchable = prop
            .toString()
            .toLowerCase()
            .includes(value.toString().toLowerCase());
          if (!isSearchBarEmpty && isSearchable) {
            productValidator = true;
          }
        });
        return productValidator;
      });
      if(value.trim().length === 0){
    this.setState({ ...this.state, searchState: this.state.defaultState });
      }else this.setState({ ...this.state, searchState: foundProducts });
  }
  render(): React.ReactNode {
    return (
      <>
        <h1>Home Page</h1>
        <Search itemSearchHandler={this.updateBySearch} />
        <ProductList items={this.state.searchState || []} />
      </>
    );
  }
}

export default Home;
