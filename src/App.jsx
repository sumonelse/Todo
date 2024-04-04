import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid'

import "./App.css"

const App = () => {
    const [input, setInput] = useState("")
    const [todos, setTodos] = useState([{txt: "Create Todo", completed: false, id: uuidv4()}])

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const handleCheckBox = (id) => {
        const newTodos = todos.map((todo) => {
            if(todo.id == id){
                todo.completed = !todo.completed
            }
            return todo
        })
        setTodos(newTodos)
    }

    const addTodo = () => {
        /** ONE WAY */
        // const newTodos = [...todos, {txt: input, id: uuidv4()}]
        // setTodos(newTodos)

        /** ANOTHER WAY */
        setTodos((prevTodos) => [...prevTodos, {txt: input, completed: false, id: uuidv4()}])

        setInput("")
        // console.log(todos)
    }

    // const updateTodo = (id, txt) => {
    //     const newTodos = todos.map((todo) => {
    //         if(todo.id == id){
    //             todo.txt = txt
    //         }
    //         return todo
    //     })
    //     setTodos(newTodos)
    // }

    const editTodo = (id, txt) => {
        const todoTxt = txt
        setInput(txt)
        deleteTodo(id)
    }

    const deleteTodo = (id) => {
        const newTodos = todos.filter((todo) => todo.id != id)
        setTodos(newTodos)
    }

    // console.log("RENDER TiMe: ", todos)

    return (
        <div className="container flex">
            <div className="wrapper flex">
                <div className="input-wrapper flex">
                    <input type="text" onChange={(e) => handleInput(e)} value={input} placeholder="e.g. Write some Code :)"/>
                    <button onClick={addTodo} className="btn">Add</button>
                    {/* <button onClick={updateTodo} className="btn">Update</button>
                    <button onClick={() => setInput("")} className="btn">Cancel</button> */}
                </div>
                <div className="todo-wrapper flex">
                    {todos.map((todo) => (
                        <div key={todo.id} className="todo flex">
                            <div className="info-wrapper flex">
                                <input type="checkbox" onChange={(e) => handleCheckBox(todo.id)} checked={todo.completed ? true : false} />
                                <div className={`todoTxt ${todo.completed ? "completed" : "" }`}>{todo.txt}</div>
                            </div>
                            <div className="btn-wrapper flex">
                                <button onClick={() => editTodo(todo.id, todo.txt)} className="editBtn btn">Edit</button>
                                <button onClick={() => deleteTodo(todo.id)} className="deleteBtn btn">Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default App