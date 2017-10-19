import React from 'react'
import {connect} from 'react-redux'
import {BrowseRouter, Route, Link} from 'react-router-dom'

import Shortener from '../shortener'

export default class App extends React.Component {
  render(){
    return(
      <main>
        <h1> Soli Deo Gloria </h1>
        <Shortener/>
      </main>
    )
  }
}
