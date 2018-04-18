import React, { Component } from 'react';
import { Table, Input, Button, Checkbox } from 'semantic-ui-react';
import EditModal from '../EditModal/EditModal';
import { updateTask as updateTask_ac, loadTasks as loadTasks_ac } from '../../redux/actions/tasks';
import { updateTask, removeTask } from '../utils/apiWrapper';
import { connect } from 'react-redux';

export class TableRow extends Component {
    state = {
        modalOpen: false
    }
    changeTaskProp(propName, value) {
        updateTask(this.props.task.id, {
            [propName]: value
        }).then(updatedTask => this.props.updateTask_ac(updatedTask));
    }

    removeTask = (id) => {
        removeTask(id).then(tasks => this.props.loadTasks_ac(tasks))
    }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })
    render() {
        const { task } = this.props;
        return (
            <Table.Row onDoubleClick={this.handleOpen}>
                <Table.Cell> <Checkbox defaultChecked={task.done} onChange={(ev, data) => this.changeTaskProp('done', data.checked)} /></Table.Cell>
                <Table.Cell> {task.title}</Table.Cell>
                <Table.Cell> {task.priority}</Table.Cell>
                <Table.Cell> <Input type='date' readOnly={true} value={task.date}></Input></Table.Cell>
                <Table.Cell><Button size='mini' onClick={() => this.removeTask(task.id)} color='purple'><i className="fa fa-times" aria-hidden="true"></i></Button></Table.Cell>
                <EditModal open={this.state.modalOpen} onClose={this.handleClose} task={task} />
            </Table.Row>
        )
    }
}



export default connect(undefined, { updateTask_ac, loadTasks_ac })(TableRow); 