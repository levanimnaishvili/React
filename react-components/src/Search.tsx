import React from 'react';
import classes from './Search.module.css';

type TProps = {
  itemSearchHandler: (value: string) => void;
};

type TState = {
  searchVal: string;
  searchTimer?: number | null;
};

export default class Search extends React.Component<TProps> {
  constructor(props: TProps) {
    super(props);
    this.inputHandler = this.inputHandler.bind(this);
  }
  state: TState = { searchVal: '', searchTimer: null };

  inputHandler(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ searchVal: event.target.value }, () => {
      this.props.itemSearchHandler(event.target.value);
    });
    if(this.state.searchTimer){
        clearTimeout(this.state.searchTimer)
      }
      const newTimer = setTimeout(() => {
        this.setState({ searchVal: event.target.value, searchTimer: null });
        this.props.itemSearchHandler(event.target.value);
      }, 500);
      this.setState({ ...this.state, searchTimer: newTimer });
  
  }
  componentWillUnmount(): void {
    const hasSearchVal = this.state.searchVal.trim().length > 0;
    hasSearchVal
      ? localStorage.setItem('search-value', JSON.stringify(this.state.searchVal))
      : localStorage.removeItem('search-value');
  }
  render() {
    return (
      <div >
        <input className={classes.searchContainer}
          type="text"
          name=""
          id=""
          placeholder="search for the product"
          onChange={this.inputHandler}
        />
      </div>
    );
  }
}
