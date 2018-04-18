import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react'

export default class DatePicker extends Component {
    state = {
        dateType: false
    }
    defaultTaskDate = () => {
        let date = new Date();
        return `${date.getFullYear()}-${(date.getMonth()) < 9 ? ("0" + (date.getMonth() + 1)) : date.getMonth() + 1}-${date.getDate() < 10 ? ("0" + (date.getDate())) : date.getDate()}`
    }
    changeState() {
        this.setState({
            dateType: true
        });
        this.props.onChange && this.props.onChange({ target: { value: this.defaultTaskDate() } })
    }

    render() {
        if (this.props.defaultValue) {
            return (<Form.Input
                type="date"
                defaultValue={this.props.defaultValue}
                onChange={this.props.onChange}
                name={this.props.name}
                readOnly={this.props.readOnly}
            />)
        }
        if (!this.state.dateType) {
            return (
                <Form.Input
                    placeholder={this.props.placeholder}
                    onClick={() => this.changeState()} />)
        }
        if (this.state.dateType) {
            return (<Form.Input
                type="date"
                defaultValue={this.defaultTaskDate()}
                onChange={this.props.onChange}
                name={this.props.name}
            />)

        }
    }
}

DatePicker.propTypes = {
    placeholder: PropTypes.string
}