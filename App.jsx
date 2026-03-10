import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './AddTodo';
import TodoList from './Todolist';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="wrapper">
      <h1>Krishna Chaudhari From TechBugs</h1>

      <AddTodo />
      <TodoList />
    </div>
  )
}

export default App
