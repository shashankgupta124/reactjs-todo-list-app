
export default function TODO_INPUT_FORM({handelSubmit,newTodo,setNewTodo,editCheck}) {
    const buttonName = editCheck === true ? 'Update' : 'Go';

    return (<>
        <form id={`${buttonName}-form` } className='todoForm' onSubmit={handelSubmit}>
            <input type='text' placeholder='Enter Todo item..!'
                value={newTodo} onChange={(e) => setNewTodo(e.target.value)}></input>
            <button>{buttonName}</button>
        </form>
    </>)
}