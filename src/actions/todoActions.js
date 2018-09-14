import uuid from 'uuid';

export function addTodo(task) {
  return {
    type: 'ADD_TODO',
    todo: {
      id: uuid(),
      task,
      completed: false,
    }
  }
}

export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    id,
  }
}