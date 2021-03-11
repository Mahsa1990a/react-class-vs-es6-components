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
        <User>AAA</User>
        <User>BBB</User>
        <User>CCC</User>
      </div>
    )
  }

}