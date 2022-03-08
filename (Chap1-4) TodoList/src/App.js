import React from "react";
import "./App.css"
import {useState} from 'react'

import Lists from './components/Lists'
import Form from './components/Form'



export default function App(){
  console.log('App', '');
  
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

  const deleteAll=() => {

    setTodoData([]);

  }

    return(
      <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
        <div className="w-ful p-5 m-4 bg-white rounded shadow lg:w-3/4">
          <div className="flex justify-between mb-3">
            <div>
              <h1 className="p-2 text-pink-500 ">할일</h1>
            </div>
            <div>
              <button 
              className="p-2 text-pink-400 border-2 border-pink-200 rounded hover:text-white hover:bg-blue-200"
              onClick={() => deleteAll()}>rm -rf *</button>
            </div>
          </div>

          <Lists todoData={todoData} setTodoData={setTodoData}/>
          <Form handleSubmit={handleSubmit} value={value} setValue={setValue}/>

        </div>
      </div>
    )
}
