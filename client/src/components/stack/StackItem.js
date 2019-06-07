import React, { Component } from 'react';

export default class StackItem extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <li>
        <img src={ this.props.logo }/>
        <span className="teal">{ this.props.name }</span>
      </li>
    );
  }
}
