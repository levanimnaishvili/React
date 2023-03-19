import React from 'react';
// import { Link } from 'react-router-dom';

class About extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  render(): React.ReactNode {
    return <>
      <h1>About</h1>
      <p>Go back!</p>
      {/* <Link to='/'>Go Back!</Link> */}
    </>;
  }
}

export default About;