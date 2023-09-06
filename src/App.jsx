import { useEffect, useState } from 'react'
import './index.css'
import TodoForm from './TodosForm'
import { TodoList } from './TodoList'


export default function App(){
  const [todos, setTodos] = useState(()=>
  {
    const localValue = localStorage.getItem("ITEMS")
    if(localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(()=>{
    localStorage.setItem("ITEMS",JSON.stringify(todos))
  }, [todos])

  function addTodo(title){
    setTodos(currentTodos =>{
      return[
        ...currentTodos,
        { id: crypto.randomUUID(), 
          title, 
          completed: false},
      ]
    })

  }

  function deleteTodo(id){
    setTodos(currentTodos =>{
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  function toggleTodo(id, completed){
    
    setTodos(currentTodos =>{
      return currentTodos.map(todo =>{
        if(todo.id === id){
          return { ...todo, completed}
        }
        return todo
      })
    })
  }
  return(
    <>
      <TodoForm addToList={addTodo}/>
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} 
      toggleTodo={toggleTodo}
      deleteTodo={deleteTodo}/>
    </>
  )
}