import React from "react";
import { differenceInDays, formatDistance, subDays } from 'date-fns';


const Task = ({ taskObj, onComplete }) => {

  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <div className="deadline">Son Teslim: 
      <span>
        {differenceInDays(new Date(taskObj.deadline), new Date())} gün sonra
      </span></div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>{p}</span>
        ))}
      </div>
      {onComplete && <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>}
    </div>
  );
};

export default Task;
