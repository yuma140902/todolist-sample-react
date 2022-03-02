import React from 'react';
import { Filter } from '../types/Filter';

export const FilterSelector: React.FC<{filter: Filter, onFilterChange: (filter: Filter) => void}> = (props) => {
  const renderFilter = (filter: Filter, text: string) => {
    if (filter === props.filter) {
      return <b>{text}</b>
    }
    return (
      <button  onClick={_ => props.onFilterChange(filter)}>{text}</button>
    );
  }

  return (
    <>
      フィルター：
      {renderFilter('all', 'すべて')}&nbsp;
      {renderFilter('todo', '未完了')}&nbsp;
      {renderFilter('completed', '完了')}
    </>
  )
}