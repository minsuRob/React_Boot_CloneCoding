import React from "react";
import "./App.css"
import {useState} from 'react'

import List from './components/List'
import Form from './components/Form'



export default function App(){
  
  const [todoData, setTodoData] = useState([
    {
      id: "1",
      title: "study",
      complete: "true"
    },
    {
      id: "2",
      title: "read a book",
      complete: "false"
    }
  ]);
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
      <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
        <div className="w-ful p-5 m-4 bg-white rounded shadow lg:w-3/4">
          <div className="flex justify-between mb-3">
            <h1>할일</h1>
          </div>

          <List todoData={todoData} setTodoData={setTodoData}/>
          <Form handleSubmit={handleSubmit} value={value} setValue={setValue}/>

        </div>
      </div>
    )
}
