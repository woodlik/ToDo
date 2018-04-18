import React, { Component } from 'react'
import './App.css'
import TodoApp from './components/TodoApp/TodoApp'
import 'semantic-ui-css/semantic.min.css'


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoApp/>
      </div>
    )
  }
}

