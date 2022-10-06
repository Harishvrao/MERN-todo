import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTodos } from '../redux/actions/apis';
import Tabs from './Tabs';
import Todo from './Todo';
import { ALL_TODOS, DONE_TODOS, ACTIVE_TODOS } from './../redux/actions/type';
import { deleteTodo } from './../redux/actions/apis';

const Todos = () => {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos)
    const currentTab = useSelector(state =>  state.currentTab)

    useEffect(() => {
        dispatch(getAllTodos())
    }, [dispatch]);

    const gettodos = () =>{
        if(currentTab === ALL_TODOS){
            return todos
        }else if(currentTab === DONE_TODOS){
            return todos.filter(todo => todo.done)
        }else if(currentTab === ACTIVE_TODOS){
            return todos.filter(todo => !todo.done)
        }
    }

    const removeDoneTodos = () =>{
        todos.forEach(({done, _id}) => {
            if(done){
                dispatch(deleteTodo(_id))
            }
        })
    }
    return (
        <article>
            <div>
                <Tabs currentTab={currentTab}/>
                {
                    todos.some(todo => todo.done) ? (
                        <button className='button clear'
                        onClick={removeDoneTodos}
                        >Remove Done Todos</button>
                    ):''
                }
            </div>
            <ul> 
                {
                    gettodos().map(todo => {
                        return <Todo key={todo._id} todo={todo} />
                    })}
            </ul>
        </article> 
    )
}

export default Todos