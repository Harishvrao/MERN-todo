import axios from 'axios'
import { ADDNEW_TODO, GETALL_TODO, TOGGLE_TAB, TOGGLE_TODO, UPDATE_TODO } from './type';

const BASE_URL = 'http://localhost:5000'

export const addNewTodo = (data) => async (dispatch) => {
    try {
        const res = await axios.post(`${BASE_URL}/todos`, { data });
        dispatch({ type: ADDNEW_TODO, payload: res.data })
    } catch (error) {
        console.log('error while calling addnewtodo api',error.message)
    }
}

export const getAllTodos = () => async (dispatch) =>{
    try{
        const res = await axios.get(`${BASE_URL}/todos`);
        dispatch({type:GETALL_TODO, payload:res.data})
    }catch(error){
        console.log('error while calling getalltodo api',error.messgae)
    }
}

export const toggleTodo =(id)=> async (dispatch) => {
    console.log(id)
    try{
        const res = await axios.get(`${BASE_URL}/todos/${id}`)
        console.log(res.data)
        dispatch({type:TOGGLE_TODO, payload:res.data})
    }catch(error){
        console.log('error while calling toggling api',error.message)
    }
}

export const updateTodo = (id,data) => async (dispatch) =>{
    try{
        const res = await axios.put(`${BASE_URL}/todos/${id}`,{data})
        dispatch({type:UPDATE_TODO,payload:res.data})
    }catch(error){
        console.log('error while calling updatetodo api', error.message)
    }
}

export const deleteTodo = (id) => async (dispatch) =>{
    try{
        const res = await axios.delete(`${BASE_URL}/todos/${id}`)
        dispatch({type:GETALL_TODO, payload:res.data})
    }catch(error){
        console.log('error while calling deletetodo api', error.message)
    }
}

export const toggleTab = (tab) => async (dispatch) => {
    console.log(tab)
    dispatch({type:TOGGLE_TAB, selected:tab })
}

export const deleteAllTodos = () => async (dispatch) => {
    try{

    }catch(error){
        console.log('error while calling removedonetodo', error.message)
    }
}