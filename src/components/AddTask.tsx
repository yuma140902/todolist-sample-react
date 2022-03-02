import React, { useState } from 'react'

export const AddTask: React.FC<{onTaskAdd: (text: string) => void}> = (props) => {
  const [text, setText] = useState('');
  return (
    <>
      <input type='text' value={text} onChange={e => setText(e.target.value)}/>
      <button onClick={_ => {
        props.onTaskAdd(text);
        setText('');
      }}>追加</button>
    </>
  )
}