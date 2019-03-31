import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';

import { Links } from '../api/links';
import LinksListItem from './LinksListItem';

class LinksList extends Component {
  
  state = {
    links: []
  };

  componentDidMount = () => {
    this.linksTracker = Tracker.autorun(() => {
      Meteor.subscribe('links');
      let links = Links.find({
        visible: Session.get('showVisible')
      }).fetch();
      this.setState({ links });
    });
  }

  componentWillUnmount = () => {
    this.linksTracker.stop();
  }

  renderLinksListItems = () => {
    return this.state.links.map((link) => {
      const shortUrl = Meteor.absoluteUrl(link._id);
      return <LinksListItem  key={link._id} shortUrl={shortUrl} {...link} />
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