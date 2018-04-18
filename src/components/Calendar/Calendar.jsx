import React, { Component } from 'react';
import { Table, Icon, Checkbox } from 'semantic-ui-react'
import CalendarCell from './CalendarCell';
import './Calendar.css';

const DAYS_OF_WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export class Calendar extends Component {
    state = {
        date: new Date(),
        showComplited: true
    }
    getBeginDate(year, month) {
        let beginDate = new Date(year, month - 1, 1);
        let diff = 2 - beginDate.getDay();
        if (diff === 2) {
            beginDate.setDate(-5);
        } else {
            beginDate.setDate(diff);
        }
        return beginDate;
    }
    getCalendar() {
        let beginDate = this.getBeginDate(this.state.date.getFullYear(), this.state.date.getMonth() + 1)
        let calendarArray = [];
        let calendarRow;
        for (let week = 1; week <= 6; week++) {
            calendarRow = [];
            for (let day = 1; day <= 7; day++) {

                calendarRow.push({
                    date: beginDate.toLocaleDateString(),
                    day: new Date(beginDate.getFullYear(), beginDate.getMonth(), beginDate.getDate()),
                    disabled: beginDate.getMonth() !== this.state.date.getMonth()
                });

                beginDate.setDate(beginDate.getDate() + 1);
            }
            calendarArray.push(calendarRow);

        }
        return calendarArray;
    }
    drawContent() {
        return <Table.Body>
            {this.getCalendar().map((calendarRow, index) =>
                <Table.Row key={index}>
                    {calendarRow.map(dayItem =>
                        <CalendarCell date={dayItem.day} disabled={dayItem.disabled} key={dayItem.date} showComplited={this.state.showComplited}></CalendarCell>
                    )}
                </Table.Row>)}
        </Table.Body>;
    }
    drawHeader() {
        return <Table.Header>
            <Table.Row textAlign='center'>
                <Table.HeaderCell onClick={() => this.changeMonth(-1)}><Icon name='chevron left' /></Table.HeaderCell>
                <Table.HeaderCell colSpan='5'>{this.state.date.toLocaleString('en-US', { month: 'long', year: 'numeric' })}</Table.HeaderCell>
                <Table.HeaderCell onClick={() => this.changeMonth(1)}><Icon name='chevron right' /></Table.HeaderCell>

            </Table.Row>
            <Table.Row>
                {DAYS_OF_WEEK.map(item => <Table.HeaderCell key={item}>{item}</Table.HeaderCell>)}
            </Table.Row>
        </Table.Header>;
    }
    changeMonth(difference) {

        let { date } = this.state;
        let newDate = new Date(date.getFullYear(), date.getMonth() + difference, 1);
        this.setState({ date: newDate });
    }



    render() {

        return (
            <div className='Calendar-content'>
                <Checkbox
                    className='Calendar-checkbox'
                    checked={this.state.showComplited}
                    onClick={(ev, checkData) => this.setState({ showComplited: checkData.checked })}
                    label='Show completed' />
                <Table celled fixed>
                    {this.drawHeader()}
                    {this.drawContent()}
                </Table>
            </div>
        )
    }
}