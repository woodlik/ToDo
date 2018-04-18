import React, { Component } from 'react'
import TodoMenu from '../TodoMenu/TodoMenu'
import { TaskWrapper } from '../TaskWrapper/TaskWrapper';
import { Calendar } from '../Calendar/Calendar';
import LoginForm from '../LoginForm/LoginForm';
import { connect } from 'react-redux';




export class TodoApp extends Component {
    menu = [{
        permanent: false,
        order: 0,
        color: 'purple',
        title: 'To-do list',
        position: 'left',
        component: <TaskWrapper />
    },
    {
        permanent: false,
        order: 1,
        color: 'blue',
        title: 'Calendar',
        position: 'left',
        component: <Calendar />
    },
    {
        permanent: true,
        order: 2,
        color: 'teal',
        title: 'About',
        position: 'left',
        component: <label>Todo list for everyone</label>
    }]
    loginItem =
        {
            order: -1,
            color: 'red',
            position: 'right',
            component: <LoginForm onLogin={() => this.changeItem(0)} />
        }

    state = {
        active: this.loginItem
    }
    changeItem = (index) => {
        index === -1 ? this.setState({ active: this.loginItem }) : this.setState({ active: this.menu[index] })
    }
    render() {

        this.loginItem.title = this.props.userLogined ? 'Logout' : 'Login';

        return (
            <div className='App'>
                <TodoMenu allMenu={this.menu} loginItem={this.loginItem} changeItem={this.changeItem} active={this.state.active} />
                <div className='AppContent'>
                    {this.state.active.component}
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    userLogined: state.user.logined
})

export default connect(mapStateToProps)(TodoApp);