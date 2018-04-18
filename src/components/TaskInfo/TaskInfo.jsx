import React, { Component } from 'react'
import DatePicker from '../DatePicker/DatePicker'
import {Form, Dropdown } from 'semantic-ui-react'

const priorityOptions = [
    { key: '1', text: 'Low', value: 'Low' },
    { key: '2', text: 'Medium', value: 'Medium' },
    { key: '3', text: 'High', value: 'High', },
]

export class TaskInfo extends Component {
    render() {
        var task = this.props.task;
        return (

            <div>
                <Form.Group>
                    <Form.Input className='AddTask-input' placeholder='Title' name='title' defaultValue={task ? task.title : null} readOnly={task && task.done} />
                    <Dropdown selection className='AddTask-input' defaultValue={task ? task.priority : 'Medium'} name='priority' options={priorityOptions} disabled={task && task.done}>
                    </Dropdown>
                    <DatePicker className='AddTask-input' placeholder='Date' name='date' defaultValue={task ? task.date : (this.props.taskDate ? this.props.taskDate : null)} readOnly={this.props.taskDate || (task && task.done)} />
                </Form.Group>
                <Form.Group>
                    <Form.TextArea className='AddTask-description' placeholder='Description' name='description' fluid="true" defaultValue={task ? task.description : ""} disabled={task && task.done}></Form.TextArea>
                </Form.Group>
            </div>)
    }
}