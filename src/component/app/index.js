import React from 'react'
import {connect} from 'react-redux'
import {BrowseRouter, Route, Link} from 'react-router-dom'

import * as util from '../../lib/util.js'

import Modal from '../modal'
import Shortener from '../shortener'

class App extends React.Component {
  render(){
    return(
      <main>
        <Shortener/>
        {util.renderIf(this.props.modal,
          <Modal />
        )}
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
