import React, { Component } from 'react'
import DatePicker from '../DatePicker/DatePicker'
import './Filter.css';
import { Form, FormField, FormGroup, Header, Segment, Checkbox } from 'semantic-ui-react'

import { connect } from 'react-redux';
import { updateQueryParams } from '../../redux/actions/filter';


export class Filter extends Component {
    render() {
        let {
            showComplited,
            startDate,
            endDate,
            textSearch
        } = this.props.filter;
        return (
            <div>
                <Header attached='top' as='h2'>Filter</Header>
                <Segment attached>
                    <Form>
                        <Form.Group>
                            <Form.Field>
                                <Checkbox
                                    checked={showComplited}
                                    onClick={(ev, checkData) => this.props.updateQueryParams({ showComplited: checkData.checked })} label='Show completed' />
                            </Form.Field>
                            <DatePicker placeholder='Date From' onChange={(ev) => this.props.updateQueryParams({ startDate: ev.target.value })} defaultValue={startDate} />
                            <DatePicker placeholder='Date To' onChange={(ev) => this.props.updateQueryParams({ endDate: ev.target.value })} defaultValue={endDate} />

                        </Form.Group>

                        <input className='Filter-text' placeholder='Text search (title + description)' onChange={(ev) => this.props.updateQueryParams({ textSearch: ev.target.value.toLowerCase() })} defaultValue={textSearch} />
                    </Form>
                </Segment>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    filter: state.filter
});


export default connect(mapStateToProps, { updateQueryParams })(Filter); 
