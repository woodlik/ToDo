import React, { Component } from 'react';
import { Label, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { loadTasks as loadTasks_ac, updateTask as updateTask_ac } from '../../redux/actions/tasks';
import { removeTask, updateTask } from '../utils/apiWrapper';
import EditModal from "../EditModal/EditModal";


export class TaskItem extends Component {
    state = {
        modalOpen: false
    }
    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })
    removeTask = (id) => {
        removeTask(id).then(tasks => this.props.loadTasks_ac(tasks))
    }
    updateTask = () => { updateTask(this.props.task.id, { done: true }).then(updatedTask => this.props.updateTask_ac(updatedTask)) }
    render() {

        return (
            <div>
                <Label onDoubleClick={this.handleOpen} className='taskItem'>
                    {this.props.task.title}
                    {!this.props.task.done &&
                        <Icon name='check' onClick={() => this.updateTask()} />}
                    {!this.props.task.done &&
                        <Icon name='delete' onClick={() => this.removeTask(this.props.task.id)} />}

                    <EditModal open={this.state.modalOpen} onClose={this.handleClose} task={this.props.task} />
                </Label>

            </div>)
    }
}





export default connect(undefined, { loadTasks_ac, updateTask_ac })(TaskItem); 