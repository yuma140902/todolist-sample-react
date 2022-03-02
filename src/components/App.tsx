import React, { useState } from 'react'
import { Filter } from '../types/Filter'
import { Task } from '../types/Task'
import { AddTask } from './AddTask'
import { FilterSelector } from './FilterSelector'
import { TaskList } from './TaskList'

type AppState = {
  filter: Filter,
  tasks: Task[]
}

const initialState: AppState = {
  filter: 'all',
  tasks: []
}

export const App: React.FC = () => {
  const [state, setState] = useState<AppState>(initialState);

  const onFilterChange = (filter: Filter): void => {
    setState({...state, filter});
  }

  const onTaskAdd = (text: string): void => {
    setState({...state, tasks: [...state.tasks, {text, completed: false}]});
  }

  const onTaskComplete = (index: number): void => {
    let newTasks = [...state.tasks];
    newTasks[index].completed = true;
    setState({...state, tasks: newTasks});
  }

  const onTaskRemove = (index: number): void => {
    let newTasks = [...state.tasks];
    newTasks.splice(index, 1);
    setState({...state, tasks: newTasks});
  }

  return (
    <>
      <FilterSelector filter={state.filter} onFilterChange={onFilterChange} />
      <TaskList tasks={state.tasks} filter={state.filter} onTaskComplete={onTaskComplete} onTaskRemove={onTaskRemove} />
      <AddTask onTaskAdd={onTaskAdd} />
    </>
  )
}
