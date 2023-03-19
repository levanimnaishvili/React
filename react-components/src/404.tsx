import React from 'react';

class ErrorPage extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  render(): React.ReactNode {
    return <h1>You are trying to access wrong path. please check!</h1>;
  }
}
export default ErrorPage;