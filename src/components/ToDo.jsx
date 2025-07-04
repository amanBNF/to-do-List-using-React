import React, { useState } from 'react';

const ToDo = () => {

    const handleEdit = () => {}

    const handleDelete = () => {}

  return (
    <div className="pt-20 max-w-4xl mx-auto px-4">
      <div className="bg-purple-100 rounded-lg shadow p-6 mt-6">
        <h1 className="text-2xl font-semibold text-slate-800 mb-6">📝 Your Todos</h1>

        <div className="flex items-center gap-4 mb-6">
          <input
            className="flex-grow px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-black"
            type="text"
            placeholder="Enter a task..."
          />
          <button
            className="bg-purple-500 text-white px-5 py-2 rounded hover:bg-purple-600 transition"
          >
            Add
          </button>
        </div>

        <ul className="list-disc pl-5 text-slate-700 space-y-2">
          {/* {todos.map((todo, index) => (
            <li key={index} className="bg-white rounded p-2 shadow-sm">{todo}</li>
          ))} */}
        </ul>
      </div>
    </div>
  );
};

export default ToDo;
