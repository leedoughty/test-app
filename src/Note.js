import React, { Component } from 'react'

class Note extends Component {
  constructor(props) {
    super(props)
    this.edit = this.edit.bind(this)
    this.remove = this.remove.bind(this)
  }
  edit() {
    alert('editing note')
  }
  remove() {
    alert('removing note')
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
