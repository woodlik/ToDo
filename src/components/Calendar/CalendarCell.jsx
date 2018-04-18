import React, { Component } from 'react';
import { Label, Table } from 'semantic-ui-react'
import { connect } from 'react-redux';
import TaskItem from './TaskItem';
import AddTaskModal from '../AddTaskModal/AddTaskModal';

export class CalendarCell extends Component {
    state = {
        modalOpen: false
    }
    handleOpen = (event) => { !event.target.matches(".taskItem") && this.setState({ modalOpen: true }) }

    handleClose = () => this.setState({ modalOpen: false })
    parseDate = (date) => date.toLocaleDateString().split('.').reverse().join('-');

    getTaskByDate = (date) => {
        let tasks = this.props.tasks.filter(task => task.date === this.parseDate(date));
        return this.props.showComplited ? tasks : tasks.filter(task => !task.done)
    }


    render() {

        return (
            <Table.Cell onDoubleClick={this.handleOpen} className='calendarCell' disabled={this.props.disabled} key={this.props.key}>
                {this.props.date.toLocaleDateString() === new Date().toLocaleDateString() ?
                    <Label circular color='purple'>{this.props.date.getDate()}</Label> :
                    <label>{this.props.date.getDate()}</label>}
                {!this.props.disabled && this.getTaskByDate(this.props.date).map(task => <TaskItem task={task} key={task.id} />)}
                <AddTaskModal open={this.state.modalOpen} onClose={this.handleClose} taskDate={this.parseDate(this.props.date)} />
            </Table.Cell>)
    }
}

const mapStateToProps = (state) => ({
    tasks: state.tasks
});


export default connect(mapStateToProps)(CalendarCell); 