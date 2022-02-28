import React from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export default function List({todoData, setTodoData}) {
    
      const handleClick=(id) => {
        let newTodoData = todoData.filter(data=> data.id !== id);
        //console.log('newTd', newTodoData);
        setTodoData(todoData)
      }
    
      const handleCompleteChange = (id) =>{
        let newTodoData = todoData.map((data)=> {
          if (data.id === id) {
            // console.log('handleCompleteChange', id + ", "+ data.id);
            data.completed = !data.completed;
          }
          return data;
        });
        setTodoData(newTodoData);
      }

      const handleEnd = (result) => {
        if (!result.destination) return;
        const newTodoData = todoData;
        const [reorderedItem] = newTodoData.splice(result.source.index, 1);
        newTodoData.splice(result.destination.index, 0, reorderedItem);
        setTodoData(newTodoData);
      }

   return (
    <div>
       <DragDropContext onDragEnd={handleEnd}>
         <Droppable droppableId="todo">
           {(provided) =>(
              <div {...provided.droppableProps} ref={provided.innerRef}>
            {todoData.map((data, index)=>(
              <Draggable 
              key={data.id}
              draggableId={data.id.toString()} 
              index={index}>

            {(provided, snapshot)=>(
            <div key={data.id} {...provided.draggableProps}
             ref={provided.innerRef} {...provided.dragHandleProps}
             className={`${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"} flex justify-between items-center w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded`}
             >
                <div className="items-center">
                  <input type="checkbox" defaultChecked={false}
                  onChange={()=> handleCompleteChange(data.id)}/>
                  <span className={data.completed ? "line-through" : undefined}> {data.title}</span>
                </div>
                <div className="items-center">
                  <button className="px-4 py-2 float-right" onClick={() => handleClick(data.id)}>x</button>
                </div>
            </div>
          )}
        </Draggable>
       ))}
          </div>
          )}
          </Droppable>
          </DragDropContext>
    </div>
  );
}
