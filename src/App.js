import React from "react";
import "./App.css"
import {useState} from 'react'

import List from './components/List'
import Form from './components/Form'



export default function App(){
  
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  const handleSubmit=(e) => {
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };
    setTodoData((prev) => [...prev, newTodo]);
    setValue("");

  }

    return(
      <div>
        <div>
          <div>
            <h1>할일</h1>
          </div>

          <List todoData={todoData} setTodoData={setTodoData}/>
          <Form handleSubmit={handleSubmit} value={value} setValue={setValue}/>

        </div>
      </div>
    )
}
