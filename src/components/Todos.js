import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions/todoActions'

class Todos extends Component {
  render () {
    return (
      <div>
        <ul>
          {this.props.todos.map((todo => (
            <li 
              key={todo.id}
              onClick={() => this.props.toggleTodo(todo.id)}>{todo.task}: {todo.completed.toString()}</li>
          )))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, { toggleTodo })(Todos)
