import { useState } from "react";
import "./app.css";
import Task from "./Task";
import TaskHookForm from "./TaskHookForm";
import PeopleForm from "./PeopleForm";
import { initialTasks, initialTeam } from "./data";
import { toast } from 'react-toastify';


function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [team, setTeam] = useState(initialTeam);

  function handleTaskSubmit(yeniTask) {
    setTasks([yeniTask, ...tasks])
  }

  function handlePeopleSubmit(yeniKisi) {
    console.log(yeniKisi);
    setTeam([yeniKisi, ...team])
  }

  function handleComplete(id) {
    const tasksCopy = [...tasks];
    const ilgiliTask = tasksCopy.filter(t => t.id === id)[0];
    ilgiliTask.status = "yapıldı";
    setTasks(tasksCopy);

    toast.success(`Tebrikler! "${ilgiliTask.title}" tamamlandı!`);
  }

  return (
    <div className="app flex h-screen">
      <div className=" bg-white border-r overflow-auto">
        <div className="px-8 py-1 border-collapse pt-8">
          <TaskHookForm kisiler={team} submitFn={handleTaskSubmit} submitFn2={handlePeopleSubmit} />
        </div>
      </div>
      <div className="flex-1 justify-start flex-wrap px-1 over">
        <div className="flex-1">
          <div className="px-2">
            {tasks
              .filter((t) => t.status === "yapılacak")
              .map((t) => (
                <Task key={t.id} taskObj={t} onComplete={handleComplete} />
              ))}
          </div>
        </div>
      </div>
        <div className="flex-1 justify-start flex-wrap px-1 over">
          <div className="flex-1">
            <div className="px-2">
              {tasks
                .filter((t) => t.status === "yapıldı")
                .map((t) => (
                  <Task key={t.id} taskObj={t} />
                ))}
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
