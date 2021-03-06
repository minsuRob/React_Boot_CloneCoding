import React from 'react'

import {useCallback} from "react"

const List =
React.memo(({ id, title, completed, editable, todoData, setTodoData, provided, snapshot, }) => {


        console.log('List', '');
        const handleClick = useCallback((id) => {
            let newTodoData = todoData.filter(data => data.id !== id);
            //console.log('newTd', newTodoData);
            setTodoData(newTodoData)
        }, [todoData]);

        const handleCompleteChange = (id) => {
            let newTodoData = todoData.map((data) => {
                if (data.id === id) {
                    // console.log('handleCompleteChange', id + ", "+ data.id);
                    data.completed = !data.completed;
                }
                console.log("data", data);
                return data;
            });
            setTodoData(newTodoData);
        }

        const onChange = (e) => {
            let newTodoData = todoData.map((data) => {
                if (data.id === id) {
                    // console.log('handleCompleteChange', id + ", "+ data.id);
                    data.title = e.target.value;
                }
                console.log("data", data);
                return data;
            });
            setTodoData(newTodoData);
        }

        const onClick=()=>{

            let newTodoData = todoData.map((data) => {
                data.editable = !data.editable;
                return data;
            });
            //localStorage.setItem('num',JSON.stringify(newTodoData));
            setTodoData(newTodoData);

        }

        return (
            <div key={id} {...provided.draggableProps}
                ref={provided.innerRef} {...provided.dragHandleProps}
                className={`${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"} flex justify-between items-center w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded`}
            >
                <div className="items-center">
                    <input type="checkbox" defaultChecked={false}
                        onChange={() => handleCompleteChange(id)} />
                    <span
                     className={completed ? "line-through" : undefined}> 
                     {editable ? <input type="text" value={title} onChange={onChange} /> : title}
                     </span>
                </div>
                <div className="items-center">
                        <button 
                        //className="px-4 py-2 float-right "
                        className="p-2 text-pink-400 border-2 border-pink-200 rounded hover:text-white hover:bg-blue-200"
                        onClick={onClick}>{editable ? "??????" : "??????"}</button>
                    <button 
                    //className="px-4 py-2 float-right"
                    className="p-2 text-pink-400 border-2 border-pink-200 rounded hover:text-white hover:bg-blue-200"
                     onClick={(e) => handleClick(id)}>x</button>
                </div>
            </div>
        )
    });

export default List