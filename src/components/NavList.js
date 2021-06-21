import React from 'react';

const NavList = ({ setStatus }) => {
    const statusHandler = (e) => {
        setStatus(e.target.value);
    };
    return (
        <select onChange={statusHandler} name="todos" className="container filter-todo">
            <option
                value="all"
                className="filter">All
            </option>
            <option
                value="completed"
                className="filter">Completed
            </option>

            <option
                value="uncompleted"
                className="filter">Uncompleted
            </option>
        </select>
    );
}

export default NavList;