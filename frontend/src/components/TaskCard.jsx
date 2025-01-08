import React from "react";

const TaskCard = ({ task, onUpdate, onDelete, onPin }) => {
  return (
    <div className="bg-zinc-700 p-4 rounded-lg shadow-md flex justify-between items-center">
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-white">{task.name}</h3>
        <p className="text-gray-400 text-sm">{task.description}</p>
        <p className="text-sm text-white font-semibold">
          {new Date(task.date).toLocaleString()}
        </p>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => onPin(task)}
          className={`px-2 py-1 rounded font-semibold ${
            task.pinned ? "bg-yellow-400" : "bg-gray-300 "
          }`}
        >
          Pin
        </button>
        <button
          onClick={() => onUpdate(task)}
          className="bg-blue-500 text-white font-semibold px-2 py-1 rounded"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(task._id)}
          className="bg-red-500 text-white font-semibold px-2 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
