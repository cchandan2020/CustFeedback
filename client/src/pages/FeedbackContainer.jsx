import React, { Component } from 'react'
import { FeedbackInsert, FeedbackList, RatingChart } from './index'
import './index.css';

//import styled from 'styled-components'

class FeedbackContainer extends Component {
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <container1>
            <div className = 'container1'>
                <FeedbackInsert />
            </div>

             <div className = 'container1'>
                <FeedbackList reload/>|
            </div> 

            <div className ='container1'>
                <RatingChart />
             </div>
            </container1>
        )
       }


}

export default FeedbackContainer