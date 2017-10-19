import React from 'react'
import {connect} from 'react-redux'

import './style.scss'
import * as modalAction from '../../action/modal.js'

class Modal extends React.Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.props.modal
      ? this.props.toggleModal(false)
      : this.props.toggleModal(true)
  }

  render(){
    return(
      <div className='modal-wrapper' onClick={this.handleClick}>
        <div className='modal'>
          <div className='title'>
            Successful shortened URL modal
          </div>
          <div className='original-url'>
            Original URL: {this.props.url}
          </div>
        </div>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  url: state.url,
  modal: state.modal,
})

let mapDispatchToProps = (dispatch) => ({
  toggleModal: (submitted) => dispatch(modalAction.modal(submitted)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
