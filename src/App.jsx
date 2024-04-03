import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid'

import "./App.css"

const App = () => {
    const [input, setInput] = useState("")
    const [todos, setTodos] = useState([{txt: "Create Todo", id: uuidv4()}])

    const handleInput = (e) => {
        setInput(e.target.value)
        // console.log(input)
    }

    const addTodo = () => {
        /** ONE WAY */
        // const newTodos = [...todos, {txt: input, id: uuidv4()}]
        // setTodos(newTodos)

        /** ANOTHER WAY */
        setTodos((prevTodos) => [...prevTodos, {txt: input, id: uuidv4()}])

        setInput("")

        // console.log(todos)
    }

    const deleteTodo = (id) => {
        const newTodo = todos.filter((todo) => todo.id != id)
        // console.log(newTodo)
        setTodos(newTodo)
        // console.log("Delete")
    }

    // console.log("RENDER TiMe: ", todos)

    return (
        <div className="container flex">
            <div className="wrapper flex">
                <div className="input-wrapper flex">
                    <input type="text" onChange={(e) => handleInput(e)} value={input} placeholder="e.g. Write some Code :)"/>
                    <button onClick={addTodo} className="btn">Add</button>
                </div>
                <div className="todo-wrapper flex">
                    {todos.map((todo) => (
                        <div key={todo.id} className="todo flex">
                            <div className="todoTxt">{todo.txt}</div>
                            <div className="btn-wrapper flex">
                                <button className="editBtn btn">Edit</button>
                                <button onClick={(e) => deleteTodo(todo.id)} className="deleteBtn btn">Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default App