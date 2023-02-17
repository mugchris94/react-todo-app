
import React, {useState} from 'react'
import "../css/todo.css";
import {RiCloseCircleLine} from "react-icons/ri";
import {TiEdit} from "react-icons/ti";

const Todo = ({ todos, completeTodo , removeTodo}) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });
  return todos.map((todo, index) => {

    return(
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
        key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className='todoDate'>
                {todo.createdTime}
            </div>

            <div className='icons'>
                <RiCloseCircleLine
                    onClick = { () => removeTodo(todo.id)}
                    className='delete-icon'
                />
                <TiEdit />
            </div>
    </div>
    )
    
})
}

export default Todo