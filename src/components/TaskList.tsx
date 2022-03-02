import React from "react";
import { Filter } from "../types/Filter";
import { Task } from "../types/Task";

export const TaskList: React.FC<{tasks: Task[], filter: Filter, onTaskComplete: (index: number) => void, onTaskRemove: (index: number) => void}> = (props) => {
  const taskItems = props.tasks
    .filter(task => {
      switch (props.filter) {
        case 'all': return true;
        case 'todo': return !task.completed;
        case 'completed': return task.completed;
      }
    })
    .map((task, index) => 
      <li>
        <button onClick={_ => props.onTaskComplete(index)}>完了</button>
        <button onClick={_ => props.onTaskRemove(index)}>削除</button>
        {task.text + ' ' + (task.completed ? '(完了)' : '(未完了)')}
      </li>
    );

  return (
    <ul>
      {taskItems}
    </ul>
  )
}