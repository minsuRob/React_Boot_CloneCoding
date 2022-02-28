import React from 'react'

export default function Form({handleSubmit, value, setValue}) {
    const handleChange=(e) => {
        setValue(e.target.value);
    };

    
  
  return (
    <div>
        <form style={{display : "flex"}} onSubmit={handleSubmit}>
          <input
           type="text"
           name="value"
           placeholoder="write the todo task"
           value={value}
           onChange={handleChange}
          />
          <input
           type="submit"
           value="입력"
          />
        </form>  
    </div>
  )
}
