import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from '../../components/home/Home';
import {
  doSomething,
} from '../../redux/home/home'

class HomeContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Home />
    )
  }
}

const mapStateToProps = state => ({
  data: state.data,
})

const mapDispatchToProps = {
  doSomething,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
