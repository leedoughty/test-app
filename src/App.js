// @flow
import React, { Component } from 'react'
import Note from './Note'
import { FaPlus } from 'react-icons/fa'
import Add from './Add.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: []
    }
    this.add = this.add.bind(this)
    this.eachNote = this.eachNote.bind(this)
    this.update = this.update.bind(this)
    this.remove = this.remove.bind(this)
    this.nextId = this.nextId.bind(this)
  }

  add(text) {
    this.setState(prevState => ({
      notes: [
        ...prevState.notes,
        {
          id: this.nextId(),
          note: text
        }
      ]
    }))
  }

  nextId() {
    this.uniqueId = this.uniqueId || 0
    return this.uniqueId++
  }

  update(newText, i) {
    console.log('Updating item at index', i, newText)
    this.setState(prevState => ({
      notes: prevState.notes.map(
        note => (note.id !== i) ? note : {...note, note: newText}
      )
    }))
  }

  remove(id) {
    console.log('Removing item at', id)
    this.setState(prevState => ({
      notes: prevState.notes.filter(note => note.id !== id)
    }))
  }

  eachNote(note, i) {
    return (
      <Note key={note.id}
            index={note.id}
            onChange={this.update}
            onRemove={this.remove}>
            {note.note}
      </Note>
    )
  }

  render() {
    return (
      <div className="App">
        {this.state.notes.map(this.eachNote)}
        <button onClick={this.add.bind(null, "New Note")} id="add"><Add /></button>
      </div>
    )
  }
}

export default App;
