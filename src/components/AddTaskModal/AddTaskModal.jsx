import React, { Component } from 'react'
import { Button, Icon, Modal, Form } from 'semantic-ui-react'
import { TaskInfo } from '../TaskInfo/TaskInfo';
import getDataFromForm from '../utils/getDataFromForm';
import { addTask as addTask_ac } from '../../redux/actions/tasks';
import { addTask } from '../utils/apiWrapper';
import { connect } from 'react-redux';

export class AddTaskModal extends Component {
    onSubmit = (event) => {
        addTask(getDataFromForm(document.querySelector('.modal'))).then(taskData => this.props.addTask_ac(taskData));
        this.props.onClose();
    }
    render() {
        return (
            <Modal open={this.props.open} size='small' className='modal'>

                <Modal.Header>
                    <h2>
                        <Icon name='plus square outline' />
                        Add task
                    </h2>
                </Modal.Header>

                <Modal.Content>
                    <Form >
                        <TaskInfo taskDate={this.props.taskDate} />
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='green' onClick={this.onSubmit} inverted>
                        <Icon name='checkmark' /> Add
                     </Button>
                    <Button color='red' onClick={this.props.onClose} inverted>
                        <Icon name='remove' /> Cancel
                     </Button>
                </Modal.Actions>

            </Modal>
        )
    }
}

export default connect(undefined, { addTask_ac })(AddTaskModal); 