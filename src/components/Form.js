import React from 'react';


const Form = ({ inputText, setInputText, todos, setTodos }) => {
    const inputHandler = (e) => {
        setInputText(e.target.value)
    }

    const submitTodo = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            { text: inputText, completed: false, id: Math.random() * 1000 }
        ]);
        setInputText("");
    }
    return (
        <div class="row mb-5 mt-5">
            <div class="col-12">
                <input type="text" class="form-control todo-input" id="exampleInputEmail1" aria-describedby="emailHelp"
                    placeholder="Enter To do here..."
                    value={inputText}
                    onChange={inputHandler}
                />

            </div>
            <div className="col-12 px-auto text-center mt-3">
                <button type='submit'
                    className="btn btn-dark add-task "
                    onClick={submitTodo}>
                    <i className="fas fa-plus fa-2x"></i>
                </button>
            </div>
        </div>
    );
}

export default Form;