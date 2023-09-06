
export default function TODO_INPUT_FORM({handelSubmit,newTodo,setNewTodo,editCheck}) {
    
    return (<>
        <form className='todoForm' onSubmit={handelSubmit}>
            <input type='text' placeholder='Enter Todo item..!'
                value={newTodo} onChange={(e) => setNewTodo(e.target.value)}></input>
            <button>{editCheck === true ? 'Update' : 'Go'}</button>
        </form>
    </>)
}