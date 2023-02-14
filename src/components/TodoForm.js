import React, {useState} from 'react'
import "../css/todoForm.css";



const TodoForm  = (props) => {
  const [ input, setInput ] = useState('')

  const handleSubmit = e =>{
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text : input,
      createdTime : new Date().toLocaleDateString("de-DE")
    })
    setInput('');
    
  }

  const handleChange = (e) =>{
    
    setInput(e.target.value)


  }

  return (
    <div>
      <form className='todo-form' onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder="Add a Task"
            value={input}
            name="text" 
            className='todo-input'
            onChange={handleChange}
          />

        <button className='todo-button'>
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default TodoForm