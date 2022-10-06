import React,{useState} from 'react'
import { addNewTodo } from '../redux/actions/apis'
import {useDispatch} from 'react-redux'

const TodoForm = () =>{

    let [data,setData] = useState('')
    let dispatch = useDispatch()

    const handelSubmit = (e) =>{
        e.preventDefault()
        dispatch(addNewTodo(data))
        setData('')
    }

    return(
        <form onSubmit={handelSubmit}>
            <input placeholder='Enter the todo...' value={data} onChange={(e) => setData(e.target.value)}/>
        </form>
    )
}

export default TodoForm

