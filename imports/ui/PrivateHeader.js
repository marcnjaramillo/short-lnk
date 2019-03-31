import React from 'react';
import PropTypes from 'prop-types';
import { Accounts } from 'meteor/accounts-base';

const onLogout = () => {
  Accounts.logout();
};

const PrivateHeader = (props) => {

  return (
    <div>
      <h1>{props.title}</h1>
      <button onClick={onLogout}>Logout</button>
    </div>
  )
};

PrivateHeader.propTypes = {
  title: PropTypes.string.isRequired
}

export default PrivateHeader;