import React, { useState, useEffect } from 'react';
import './App.css';
import TodoNav from './components/TodoNav';
import TodoList from './components/TodoList';
import Form from './components/Form';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const saveLocalTodos = () => {
    localStorage.setItem('mytodos', JSON.stringify(todos));
  }

  const getLocalTodos = () => {
    if (localStorage.getItem('mytodos') === null) {
      localStorage.setItem('mytodos', JSON.stringify(todos));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('mytodos'));
      setTodos(todoLocal);
    }
  }

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
    }
  }

  return (
    <div className="App p-4">
      <h1 className="text-center mb-3 App-name">Kurt's To-Do</h1>
      <div className="container">
        <Form
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
          setStatus={setStatus}
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-12 mx-sm-auto">
            <TodoNav
              setStatus={setStatus}
            />
          </div>
          <div className="col-lg-8 col-sm-12 mx-sm-auto">
            <TodoList
              todos={todos}
              setTodos={setTodos}
              filteredTodos={filteredTodos}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
