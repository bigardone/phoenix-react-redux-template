import React            from 'react';
import { connect }      from 'react-redux';
import Header           from '../layouts/header';

class AuthenticatedContainer extends React.Component {
  render() {
    const { currentUser, dispatch, socket, channel } = this.props;

    if (!currentUser) return false;

    return (
      <div id="authentication_container" className="application-container">
        <Header
          currentUser={currentUser}
          dispatch={dispatch}
          socket={socket}
          channel={channel} />

        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  state.session
);

export default connect(mapStateToProps)(AuthenticatedContainer);
