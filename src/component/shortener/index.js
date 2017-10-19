import React from 'react'
import {connect} from 'react-redux'

import * as util from '../../lib/util.js'
import * as URLAction from '../../action/url.js'
import * as modalAction from '../../action/modal.js'

import Modal from '../modal'

class Shortener extends React.Component {
  constructor(props){
    super(props)
    this.state={
      url: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    let {name, value} = e.target
    this.setState({[name]: value})
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.modal
      ? this.props.toggleModal(false)
      : this.props.toggleModal(true)
    this.props.setURL(this.state.url)
    this.setState({url: ''})
  }

  render(){
    console.log(this.props.url)
    return(
      <div className='form-container'>
        <form onSubmit={this.handleSubmit}>
          <input
            name='url'
            type='text'
            placeholder='enter your url here'
            value={this.state.url}
            onChange={this.handleChange}
          />
          <button type='submit'> SHORTEN URL </button>
        </form>
        {util.renderIf(this.props.modal,
          <Modal />
        )}
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  modal: state.modal,
})

let mapDispatchToProps = (dispatch) => ({
  toggleModal: (submitted) => dispatch(modalAction.modal(submitted)),
  setURL: (url) => dispatch(URLAction.url(url)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Shortener)
