import React from 'react';
import NavList from './NavList';

const TodoNav = ({ setStatus }) => {
    return (
        <div className="p-4 card nav-card">
            <h5>Filter To-do List</h5>
            <NavList
                setStatus={setStatus}
            />
        </div>
    );
}

export default TodoNav;