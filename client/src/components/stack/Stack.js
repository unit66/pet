import React, { Component } from 'react';
import StackItem from './StackItem';

export default class Stack extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <section className="stack">
        <p>I have working experience on next <span className="teal">stack</span> of technology:</p>
        <ul className="stackList">
          { this.props.stack.map((e) =>
            <StackItem name={e.name} logo={e.logo} key={e._id}/>
          )}
        </ul>
      </section>
    );
  }
}
