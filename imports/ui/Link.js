import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import { Links } from '../api/links';
import LinksList from './LinksList';


class Link extends Component {

  componentWillMount() {
    if (!Meteor.userId()) {
      this.props.history.replace('/');
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    const url = this.refs.url.value.trim();

    if (url) {
      Meteor.call('links.insert', url);
      this.refs.url.value = '';
    }
  }

  handleLogout = () => {
    Accounts.logout();
  }

  render() {
    return (
      <div>
        <h1>Your Links</h1>
        <LinksList />
        <p>Add a Link</p>
        <form onSubmit={this.onSubmit}>
          <input type="text" ref="url" placeholder="URL" />
          <button>Add Link</button>
        </form>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    )
  }
};

export default Link;