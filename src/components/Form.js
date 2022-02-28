import React from 'react'

export default function Form({ handleSubmit, value, setValue }) {
  console.log('Form', '');

  const handleChange = (e) => {
    setValue(e.target.value);
  };


  return (
    <div>
      <form onSubmit={handleSubmit}
        className="flex pt-2"
      >
        <input
          type="text"
          name="value"
          placeholoder="write the todo task"
          value={value}
          onChange={handleChange}
          className="w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow"
        />
        <input
          type="submit"
          value="입력"
          className="p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-200"
        />
      </form>
    </div>
  )
}
