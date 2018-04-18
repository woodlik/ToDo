import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TableHeader.css';
import { Table } from 'semantic-ui-react'

export class TableHeader extends Component {

    state = {
        direction: null
    }
    clickHandler = () => {
        if (this.props.setSort) {
            var dir = this.state.direction === 'ascending' ? 'descending' : 'ascending'
            this.setState({ direction: dir })
            this.props.setSort(dir === 'ascending');
        }
    }
    render() {
        let sorted = this.props.column === this.props.field ? this.state.direction : null;
        return (
            <Table.HeaderCell
                sorted={sorted}
                onClick={this.clickHandler} >
                <label>{this.props.title}</label>
            </Table.HeaderCell>
        )
    }
}

TableHeader.propTypes = {
    task: PropTypes.string,
    setSort: PropTypes.func
}
