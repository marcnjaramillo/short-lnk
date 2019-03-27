import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Links } from '../api/links';

class LinksList extends Component {
  
  state = {
    links: []
  };

  componentDidMount = () => {
    this.linksTracker = Tracker.autorun(() => {
      Meteor.subscribe('links');
      let links = Links.find().fetch();
      this.setState({ links });
    });
  }

  componentWillUnmount = () => {
    this.linksTracker.stop();
  }

  renderLinksListItems = () => {
    return this.state.links.map((link) => {
      return <p key={link._id}>{link.url}</p>
    })
  };

  render() {
    return (
      <div>
        <p>Links List</p>
        <div>
          {this.renderLinksListItems()}
        </div>
      </div>
    );
  }
};

export default LinksList;