import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filteredTodos }) => {
    return (
        <div className="">
            {/* <h2>Todo List</h2> */}
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <Todo
                        key={todo.id}
                        text={todo.text}
                        todo={todo}
                        todos={todos}
                        setTodos={setTodos}
                    />
                ))}
            </ul>

        </div>
    );
}

export default TodoList;