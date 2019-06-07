import React, { Component } from 'react';
import { connect } from 'react-redux';
import Stack from '../../components/stack/Stack';
import {
  getStack,
} from '../../redux/stack/stack'

class StackContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.getStack();
  }

  componentDidMount() {
    const {
      stack
    } = this.props
    if (!stack.length) this.props.getStack();
  }

  render() {
    return (
      <Stack {...this.props}/>
    )
  }
}

const mapStateToProps = state => ({
  stack: state.stack,
})

const mapDispatchToProps = {
  getStack,
}

export default connect(mapStateToProps, mapDispatchToProps)(StackContainer)
