import React from 'react';

const Todo = ({ text, todo, todos, setTodos }) => {
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id));
    };

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                };
            }
            return item;
        }))
    };

    return (
        <div className="todo">
            <div className="col-12 card todo-card">
                <div className="row">
                    <h5 className={`todo-text ${todo.completed ? 'completed' : ''}`}>
                        {text}
                    </h5>
                    <div className="ml-auto mr-2 mt-1">
                        <button onClick={completeHandler} className="btn complete-btn">
                            <i className="far fa-check-circle fa-2x"></i>
                        </button>
                        <button onClick={deleteHandler} className="btn delete-btn">
                            <i className="fas fa-trash-alt fa-2x"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Todo;