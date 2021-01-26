import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = (props) => {
    return (

            <ul className="list-group list-group-flush">
                        {
                            props.todos.map((todo, i) => (
                                <TodoListItem 
                                key={todo.id} 
                                i={i} 
                                todo={todo} 
                                handleDelete={props.handleDelete} handleToggle={props.handleToggle} />
                            ))
                        }
                    </ul>

    )
}
