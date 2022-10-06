import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { toggleTodo, updateTodo } from '../redux/actions/apis';
import { deleteTodo } from './../redux/actions/apis';

const Todo = ({todo}) => {
    const dispatch = useDispatch()
    let [editing, setEditing] = useState(false)
    let [text, setText] = useState(todo.data)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setEditing(ps => !ps)
        dispatch(updateTodo(todo._id, text))
    }
    return(
        <li className='task'
         onClick={() => dispatch(toggleTodo(todo._id))}
         style={{
            textDecoration:todo.done ? 'line-through':''
         }}
         >
            <span style={{
                display: editing? 'none': ''
            }}>{todo.data}</span>
            <form style={{
                display:editing?'inline':'none'
            }}
            onSubmit = {handleSubmit}>
                <input type='text' value={text} onChange={(e) => setText(e.target.value)} className='edit-todo'/>
            </form>
            <span className='icon' onClick={() => dispatch(deleteTodo(todo._id))}>X</span>
            <span className='icon' onClick={() => setEditing(ps => !ps)}>i</span>
        </li>
    ) 
}
export default Todo