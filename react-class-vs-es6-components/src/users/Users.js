// class based component ... so we need to import component library
import React, { Component } from 'react';
import User from './User';

export default class Users extends Component {
  render() {
    return(
      // <div>Class based component test</div>
      <div>
        {/* coming from Users (calss based) from App: */}
        <h1>{this.props.title}</h1>
        <User></User>
        <User age="30">BBB</User>
        <User age="40">CCC</User>
        <User age="50">DDD</User>
      </div>
    )
  }

}