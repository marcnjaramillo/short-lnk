import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';


class Link extends Component {

  componentWillMount() {
    if (!Meteor.userId()) {
      this.props.history.replace('/');
    }
  };

  handleLogout = () => {
    Accounts.logout();
  }

  render() {
    return (
      <div>
        <h1>Your Links</h1>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    )
  }
};

export default Link;