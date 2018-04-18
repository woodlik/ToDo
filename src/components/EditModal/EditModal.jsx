import React, { Component } from 'react'
import { Button, Icon, Modal,ModalHeader,ModalContent,ModalActions, Form } from 'semantic-ui-react'
import { TaskInfo } from '../TaskInfo/TaskInfo';
import getDataFromForm from '../utils/getDataFromForm';
import { updateTask as updateTask_ac } from '../../redux/actions/tasks';
import { updateTask } from '../utils/apiWrapper';
import { connect } from 'react-redux';

export class EditModal extends Component {
    onSubmit = (event) => {
        updateTask(this.props.task.id, getDataFromForm(document.querySelector('.modal'))).then(updatedTask => this.props.updateTask_ac(updatedTask));
        this.props.onClose();
    }
    render() {
        return (
            <Modal open={this.props.open} size='small' className='modal'>

                <ModalHeader>
                    <h2>
                        <Icon name='edit' />
                        Edit task
                    </h2>
                </ModalHeader>

                <ModalContent>
                    <Form >
                        <TaskInfo task={this.props.task} />
                    </Form>
                </ModalContent>
                <ModalActions>
                    <Button color='green' onClick={this.onSubmit} disabled={this.props.task.done} inverted>
                        <Icon name='checkmark' /> Edit
                     </Button>
                    <Button color='red' onClick={this.props.onClose} inverted>
                        <Icon name='remove' /> Cancel
                     </Button>
                </ModalActions>

            </Modal>
        )
    }
}

export default connect(undefined, { updateTask_ac })(EditModal);