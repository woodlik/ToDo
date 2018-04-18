import React, { Component } from 'react';
import AddTask from '../AddTask/AddTask';
import Filter from '../Filter/Filter';
import TaskTable from '../TaskTable/TaskTable';
import './TaskWrapper.css';

export class TaskWrapper extends Component {
    render() {

        return (
            <div className='TaskWrapper'>
                <AddTask />
                <Filter />
                <TaskTable/>
            </div>
        );
    }
}

