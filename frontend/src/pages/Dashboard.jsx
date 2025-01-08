import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TaskCard from "../components/TaskCard";
import { fetchTasks, createTask, updateTask, deleteTask } from "../api";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [taskDetails, setTaskDetails] = useState({
    name: "",
    description: "",
    date: ""
  });

  const loadTasks = async () => {
    const { data } = await fetchTasks();
    setTasks(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTask(taskDetails);
    setTaskDetails({ name: "", description: "", date: "" });
    loadTasks();
  };

  const handleUpdate = async (task) => {
    const updatedName = prompt("Edit task name", task.name);
    if (updatedName) {
      await updateTask(task._id, { ...task, name: updatedName });
      loadTasks();
    }
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  const handlePin = async (task) => {
    await updateTask(task._id, { ...task, pinned: !task.pinned });
    loadTasks();
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="bg-zinc-900 min-h-screen">
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        {/* Form Section */}
        <div className="bg-zinc-700 shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            Add a New Task
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-wrap gap-4">
            <input
              type="text"
              placeholder="Task Name"
              value={taskDetails.name}
              onChange={(e) =>
                setTaskDetails({ ...taskDetails, name: e.target.value })
              }
              className="w-full sm:w-auto flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none font-semibold"
            />
            <input
              type="text"
              placeholder="Task Description"
              value={taskDetails.description}
              onChange={(e) =>
                setTaskDetails({ ...taskDetails, description: e.target.value })
              }
              className="w-full sm:w-auto flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none font-semibold"
            />
            <input
              type="date"
              value={taskDetails.date}
              onChange={(e) =>
                setTaskDetails({ ...taskDetails, date: e.target.value })
              }
              className="w-full sm:w-auto flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none font-semibold"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-lg hover:opacity-90 transition duration-300"
            >
              Add Task
            </button>
          </form>
        </div>

        {/* Tasks Section */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Your Tasks
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tasks.map((task) => (
              <TaskCard
                key={task._id}
                task={task}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
                onPin={handlePin}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
