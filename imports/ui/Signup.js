import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';


class Signup extends Component {
  state = {
    error: ''
  };

  componentWillMount() {
    if (Meteor.userId()) {
      this.props.history.replace('/links');
    }
  };

  onSubmit = (e) => {
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    if (password.length < 9) {
      return this.setState({error: 'Password must be more than 8 characters in length.'})
    }

    Accounts.createUser({email, password}, (err) => {
      if (err) {
        this.setState({error: err.reason});
      } else {
        this.setState({error: ''});
      }
    });
  };

  render() {
    return (
      <div>
        <h1>Signup here</h1>

        {this.state.error ? <p>{this.state.error}</p> : undefined}
        <form onSubmit={this.onSubmit} noValidate>
          <input type="email" ref="email" name="email" placeholder="Email" />
          <input type="password" ref="password" name="password" placeholder="password" />
          <button>Create Account</button>
        </form>
        <Link to="/">Already have an account?</Link>
      </div>
    )
  }
};

export default Signup;