import React, { Component } from 'react'

class Note extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false
    }
    this.edit = this.edit.bind(this)
    this.remove = this.remove.bind(this)
  }
  edit() {
    this.setState({
      editing: true
    })
  }
  remove() {
    alert('removing note')
  }

  renderForm() {
    return (
      <div className="note">
        <form>
          <textarea />
          <button>Save</button>
        </form>
      </div>
    )
  }

  render() {
    return (
      <div className="note">
        <p>this is a test note</p>
        <span>
          <button onClick={this.edit} id="edit">Edit</button>
          <button onClick={this.remove} id="remove">Remove</button>
        </span>
      </div>
    )
  }
}

export default Note
