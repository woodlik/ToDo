import React, { Component } from 'react';
import { FormInput,Form, Message, Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { loginUser } from '../../redux/actions/user';
import { checkUserPassword } from '../utils/apiLogin';



export class LoginForm extends Component {
    state = {
        secondAttempt: false
    }

    login = (event) => {
        event.preventDefault();
        let user = [...event.target.querySelectorAll('[name]')]
            .reduce((hash, item) => ({ ...hash, [item.getAttribute('name')]: item.value }), {});
        checkUserPassword(user.username, user.password).then(() => {
            this.props.loginUser(user.username);
            this.props.onLogin();
        }).catch(() => this.setState({ secondAttempt: true }));
    }

    render() {

        return (
            <Form onSubmit={this.login} error>
                {this.state.secondAttempt
                    ? <Message error header='Incorrect password' content='Please, try again' />
                    : null}
                <Form.Input type='text' placeholder='Username' name='username' />
                {this.state.secondAttempt
                    ? <Form.Input type='password' placeholder='Password' name='password' error />
                    : <Form.Input type='password' placeholder='Password' name='password' />}

                <Button color='green'>Login</Button>
            </Form>
        )
    }
}




export default connect(undefined, { loginUser })(LoginForm); 