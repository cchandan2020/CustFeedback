import React, { Component } from 'react'
import { FeedbackInsert, FeedbackList } from './index'

//import api from '../api'

//mit library
// import StarRating from 'react-star-rating';

//import styled from 'styled-components'

class FeedbackContainer extends Component {
    constructor(props) {
        super(props)
    }

    render(){

        return(
            <div>
                <FeedbackInsert />
                <FeedbackList />
            </div>
        )
       }
}

export default FeedbackContainer