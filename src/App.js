import React from 'react';
import CreateTodoForm from './components/createTodoForm'
import useTodos from './hooks/useTodos'
import './App.css'

const App = () => {
  const [todos, addTodo, setTodoCompleted] = useTodos()

  return (
    <div className="App">
      <div className="todo-container">
        <h2>Your Todo List</h2>
        <hr />
        {todos.map(todo => (
          <div className="todo">
            <p>{todo.label}</p>
            <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => setTodoCompleted(todo.id, !todo.completed)}
            />
          </div>
        ))}
    </div>
    <CreateTodoForm createNewTodo={addTodo} />
    </div>
  )
}

export default App;
