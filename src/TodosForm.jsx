import { useState } from 'react'

export default function TodoForm(props){
    const [newItem, setNewItem] = useState("")

    function handleSumbit(e){
        e.preventDefault()
        if(newItem === ""){
            return
        }
        props.addToList(newItem)
        setNewItem("")
      }
    
    return<>
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
      </>
}