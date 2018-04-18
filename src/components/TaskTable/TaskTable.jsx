import React, { Component } from 'react';
import TableRow from './TableRow';
import './TaskTable.css';
import { TableHeader } from './TableHeader';
import PropTypes from 'prop-types';
import sortBy from '../utils/sortBy';
import { Table } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { filterTasks } from '../utils/filterTasks';
import { getTasks } from '../utils/apiWrapper';
import { loadTasks as loadTasks_ac } from '../../redux/actions/tasks';

const columns = ['Done', 'Title', 'Priority', 'Date']

export class TaskTable extends Component {
    state = {
        order: 'title',
        column: 'title'
    }
    componentWillMount() {
        getTasks().then(tasks => this.props.loadTasks_ac(tasks));
    }
    orderBy = (name) => (order) => this.setState({ order: `${order ? '' : '-'}${name}`, column: name });
    render() {

        let filteredTasks = filterTasks(this.props.tasks, this.props.filter);
        let sortedTasks = sortBy(filteredTasks, this.state.order);

        return (
            <div>
                <Table className='TaskTable' key='purple' color='purple' sortable >
                    <Table.Header>
                        <Table.Row>
                            {columns.map(item => (<TableHeader key={item} title={item} setSort={this.orderBy(item.toLowerCase())} column={this.state.column} field={item.toLowerCase()} />))}
                            <TableHeader title='Remove' />
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {sortedTasks.map(task => <TableRow task={task} key={task.id} />)}
                    </Table.Body>
                </Table>
            </div>
        )
    }
}

TaskTable.propTypes = {
    tasks: PropTypes.array,
    removeTask: PropTypes.func,
    updateTask: PropTypes.func
}

const mapStateToProps = (state) => ({
    tasks: state.tasks,
    filter: state.filter
});


export default connect(mapStateToProps, { loadTasks_ac })(TaskTable); 