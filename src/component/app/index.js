import React from 'react'
import {connect} from 'react-redux'
import {BrowseRouter, Route, Link} from 'react-router-dom'

import * as util from '../../lib/util.js'

import Modal from '../modal'
import Footer from '../footer'
import Shortener from '../shortener'

import './style.scss'

class App extends React.Component {
  render(){
    return(
      <main className='main-container'>
        <Shortener/>
        {util.renderIf(this.props.modal,
          <Modal />
        )}
        <div className='footer-container'>
          <Footer />
        </div>
      </main>
    )
  }
}

let mapStateToProps = (state) => ({
  modal: state.modal,
})

let mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(App)
