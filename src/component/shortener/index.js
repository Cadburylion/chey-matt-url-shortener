import React from 'react'

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
    alert('url shortened!')
  }

  render(){
    return(
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
    )
  }
}

export default Shortener
