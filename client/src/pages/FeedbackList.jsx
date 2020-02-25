import React, { Component } from 'react'
import ReactTable from 'react-table-v6'
//var ReactTable = require('react-table-v6').default
// added version 6 to fix the issue -

import api from '../api'

import styled from 'styled-components'

import 'react-table-v6/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`



class FeedbackList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            feedbacks: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllFeedbacks().then(feedbacks => {
            this.setState({
                feedbacks: feedbacks.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { feedbacks, isLoading } = this.state
        console.log('TCL: FeedbackList -> render -> feedbacks', feedbacks)

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Name',
                accessor: 'name',
                filterable: true,
            },
            {
                Header: 'Email',
                accessor: 'email',
                filterable: true,
            },
            {
                Header: 'Rating',
                accessor: 'rating',
                filterable: true,
            },
            {
                Header: 'Comment',
                accessor: 'comment',
                filterable: true,
            },
            {
                Header: 'Time',
                accessor: 'time',
                //Cell: props => <span>{props.value.join(' ./ ')}</span>,
            },
        ]

        let showTable = true
        if (!feedbacks.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={feedbacks}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default FeedbackList

