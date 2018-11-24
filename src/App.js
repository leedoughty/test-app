import React, { Component } from 'react';
import Note from './Note'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [
        {
          id: 1,
          note: 'this is the first note'
        },
        {
          id: 2,
          note: 'this is the second note'
        }
      ]
    }
    this.eachNote = this.eachNote.bind(this)
  }

  eachNote(note, i) {
    return (
      <Note key={i}
            index={i}>
            {note.note}
      </Note>
    )
  }

  render() {
    return (
      <div className="App">
        {this.state.notes.map(this.eachNote)}
      </div>
    )
  }
}

export default App;
