import React from 'react'
import './App.css'

// components
import Header from './components/Header'
import TodoForm from './components/TodoForm'
import Todos from './components/Todos';

const App = () =>{
    return(
        <div>
            <Header/>
            <TodoForm/>
            <Todos/>
        </div>
    )
}

export default App
