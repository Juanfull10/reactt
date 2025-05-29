import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({todo}) => {
  return (
    <>
   <ul className="list-group">
    {
      todo.map(todo=>( 
        <TodoItem key={todo.id} todo={todo}/>
      ))
    }
        
    </ul>
   
    </>
  )
}
