import React from "react";
import "./App.css"
import {useState} from 'react'

import Lists from './components/Lists'
import Form from './components/Form'



export default function App(){
  console.log('App', '');
  
  if (localStorage.getItem('num') === null) localStorage.setItem('num',JSON.stringify([ { id: "1", title: "study", complete: "true", editable: "false" }, { id: "2", title: "read a book", complete: "false", editable: "false" } ]))
  
  //const [todoData, setTodoData] = useState(JSON.parse(localStorage.getItem('num')));
  const [value, setValue] = useState("");

  const [todoData, setTodoData] = useLocalStorage('num', localStorage.getItem('num'));

// Hook
function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };
  return [storedValue, setValue];
}


  const handleSubmit=(e) => {
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
      editable: false,
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

          <Lists todoData={todoData} setTodoData={setTodoData} editable={todoData}/>
          <Form handleSubmit={handleSubmit} value={value} setValue={setValue}/>

        </div>
      </div>
    )
}
