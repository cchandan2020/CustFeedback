import React, { Component } from 'react'
import { FeedbackInsert, FeedbackList, RatingChart } from './index'
import './index.css';

//import styled from 'styled-components'

class FeedbackContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {inserted:false, feedbacks:null}
    }

    handleOnInsert(){
        this.setState({inserted:true})
    }

    handleReloadCompleted(feedbacks){
        this.setState({inserted:false, feedbacks:feedbacks})

    }

    render(){
        return(
            <container1>
            <div className = 'container1'>
                <FeedbackInsert onInsert = {this.handleOnInsert.bind(this)}/>
            </div>

             <div className = 'container1'>
                <FeedbackList reload = {this.state.inserted}  reloadCompleted = {this.handleReloadCompleted.bind(this)}  />
            </div> 

            <div className ='container1'>
                <RatingChart feedbackList ={this.state.feedbacks}/>
             </div>
            </container1>
        )
       }




}

export default FeedbackContainer