import React from 'react'
import { TABS } from './../redux/actions/type';
import { useDispatch } from 'react-redux';
import { toggleTab } from '../redux/actions/apis';

const Tabs = ({currentTab}) => {
    let dispatch = useDispatch()
    return (
        TABS.map((todo, i) => {
            return <button key={i}
                className={todo === currentTab ? 'button selected' : 'button'}
                onClick={() => dispatch(toggleTab(todo))}> {todo}</button>
        })
    )
}

export default Tabs