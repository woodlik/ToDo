import React, { Component } from 'react'
import './AddTask.css';
import { Form, Header, Segment } from 'semantic-ui-react';
import { TaskInfo } from '../TaskInfo/TaskInfo';
import getDataFromForm from '../utils/getDataFromForm';
import { addTask } from '../utils/apiWrapper';
import { addTask as addTask_ac } from '../../redux/actions/tasks';
import { connect } from 'react-redux';


export class AddTask extends Component {
    addTask = (taskData) => {
        addTask(taskData).then(taskData => {
            this.props.addTask_ac(taskData)
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.addTask(getDataFromForm(event.target));
        event.target.reset();
    }
    render() {
        return (
            <div>
                <Header attached='top' as='h2'>Add task</Header>
                <Segment attached>
                    <Form attached="true" onSubmit={this.onSubmit}>
                        <TaskInfo />
                        <Form.Button color='purple'>Add Task</Form.Button>
                    </Form>
                </Segment>
            </div>
        )
    }
}


export default connect(undefined, { addTask_ac })(AddTask); 