import React, { Component } from 'react'
import './App.css'
import PropTypes from 'prop-types'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'

export default class App extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <>
         <Header />     
         <Main />
         <Footer />
      </>
    );
  }
}

