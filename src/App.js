import './App.css';
import TODO_INPUT_FORM from './components/todoInputForm';
import TODO_LIST from './components/todoList';
import { useState } from 'react';


function App() {
  const [newTodo, setNewTodo] = useState('');
  const [allTodos, setAllTodos] = useState([]);
  const [editCheck, setEditCheck] = useState(false);
  const [updateTodo, setUpdateTodo] = useState({});

  const handelSubmit = (e) => {
    e.preventDefault();
    
    if (editCheck === false && newTodo.trim() !== '') {
      setAllTodos([{ id: `${newTodo}-${Date.now()}`, todo: newTodo }, ...allTodos]);
      setNewTodo('');
    }
    
    if (editCheck === true && newTodo.trim() !== '') {

      // using Ternary operator
      const todos = allTodos.map(t =>
        (t.id === updateTodo.id)
          ? t = { id: t.id, todo: newTodo }
          : t
          //t or { id: t.id, todo: t.todo }
      );
      
      setAllTodos(todos)
      setEditCheck(false);
      setNewTodo('');

      // using if-else
      // const todos = allTodos.map(t => {
      //   if ((t.id === updateTodo.id)) {
      //     return t = { id: t.id, todo: newTodo }
      //   } else {
      //     return t = { id: t.id, todo: t.todo }
      //   }
      // } );
    }
  }

  const handelTodoDelete = (id) => {
    const todos = allTodos.filter(t => t.id !== id);
    setAllTodos([...todos])
  }

  const handelTodoEdit = (t) => {
    setEditCheck(true);
    setNewTodo(t.todo);
    setUpdateTodo(t);
  }

  return (
    <div className="App">
      <div className='container'>
        <h2>Todo App</h2>

        
        <TODO_INPUT_FORM
          handelSubmit={handelSubmit}
          newTodo={newTodo}
          setNewTodo={setNewTodo}
          editCheck ={editCheck}
        ></TODO_INPUT_FORM>

        <TODO_LIST
          todos={allTodos}
          onTodoEdit={handelTodoEdit}
          onTodoDelete={handelTodoDelete}
        ></TODO_LIST>


        {/* Without component
        <form className='todoForm' onSubmit={handelSubmit}>
          <input type='text' placeholder='Enter Todo item..!'
            value={newTodo} onChange={(e) => setNewTodo(e.target.value)}></input>
          <button>{ editCheck === true ? 'Update' : 'Go'}</button>
        </form>

        <ul className='allTodos'>
          {allTodos.map(t => 
            (<li className='singleTodo' key={t.id}>
            <span className='todoText'>{t.todo}</span>
              <button onClick={()=> handelTodoEdit(t)}>Edit</button>
              <button onClick={() => handelTodoDelete(t.id)}>Delete</button>
            </li>)
          )}
        </ul> */}

      </div>
    </div>
  );
}

export default App;
