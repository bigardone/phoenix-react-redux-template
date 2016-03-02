import React            from 'react';
import Header           from '../layouts/header';

export default class AuthenticatedContainer extends React.Component {
  render() {
    return (
      <div id="authentication_container" className="application-container">
        <Header/>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
