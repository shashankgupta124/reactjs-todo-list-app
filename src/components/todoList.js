// import React from 'react';

export default function TODO_LIST({todos, onTodoEdit, onTodoDelete}) {
    if (todos.length !== 0) {
        return (<>
            <ul className='allTodos'>
                {todos.map(t =>
                (<li className='singleTodo' key={t.id}>
                    <span className='todoText'>{t.todo}</span>
                    <button onClick={()=>  onTodoEdit(t)}>Edit</button>
                    <button onClick={() => onTodoDelete(t.id)}>Delete</button>
                </li>)
                )}
            </ul>
        </>)
    }
}