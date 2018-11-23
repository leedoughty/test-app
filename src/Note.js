import React, { Component } from 'react'

class Note extends Component {
  render() {
    return (
      <div className="note">
        <p>this is a test note</p>
        <span>
          <button>Edit</button>
          <button>Remove</button>
        </span>
      </div>
    )
  }
}

export default Note
