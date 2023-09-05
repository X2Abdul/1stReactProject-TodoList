import { useState } from 'react'
import './index.css'

export default function App(){
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])


  function handleSumbit(e){
    e.preventDefault()

    setTodos(currentTodos =>{
      return[
        ...currentTodos,
        { id: crypto.randomUUID(), 
          title: newItem, 
          completed: false},
      ]
    })

    setNewItem("")
    
  }

  function deleteTodo(e){
    e.preventDefault()

  }

  function toggleTodo(id, checked){
    
    setTodos(currentTodos =>{
      return currentTodos.map(todo =>{
        if(todo.id === id){
          return { ...todo, checked}
        }
        return todo
      })
    })
  }
  return(
    <>
      <form onSubmit={handleSumbit} className='new-item-form'>
        <div className="form-row"> 
          <label htmlFor="item">New Item</label>
          
          <input 
          value={newItem} 
          onChange={e => setNewItem(e.target.value)} 
          type="text" 
          id='item' 
          />

        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
      {todos.map(todo =>{
            return <li key={todo.id}>
              <label>
                <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)} />
                {todo.title}
              </label>
              <button onClick={deleteTodo} className="btn btn-danger">Delete</button>
            </li>
          })
        }
        
      </ul>
    </>
  )
}