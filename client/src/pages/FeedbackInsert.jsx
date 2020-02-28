import React, { Component } from 'react'
import api from '../api'

import {globalCustomer} from '../Services/global'

//importing star libs
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'


import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

class FeedbackInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            rating: '',
            comment: '',
            time: '',
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputEmail = async event => {
        const email = event.target.value
        this.setState({ email })
    }

    handleChangeInputRating = async event => {
        let rating = event.rating
        this.setState({ rating })
        console.log("This is value of rating ... ",rating)
    }
    

    handleChangeInputComment = async event => {
        const comment = event.target.value
        this.setState({ comment })
    }
    handleChangeInputTime = async event => {
        const time = event.target.value
        this.setState({ time })
    }

    handleIncludeFeedback = async () => {

        const { name, email, rating, comment, time } = this.state
        const arrayTime = time.split('/')
        const payload = { name, email,rating, comment, time: arrayTime }

        globalCustomer.push(payload)
        console.log('This is value of globalCustomer var: \n', globalCustomer)

        await api.insertFeedback(payload).then(res => {
            //window.alert(`Feedback added successfully`)
            this.setState({
                name: '',
                email: '',
                rating: '',
                comment: '',
                time: '',
            })
        })

        this.props.onInsert()

    }

    render() {
        
        const { name, email, rating, comment } = this.state
        
        return (
            <Wrapper>
                <Title>Add new feedback</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <Label>Email: </Label>
                <InputText
                    type="email"
                    value={email}
                    onChange={this.handleChangeInputEmail}
                />
                <Label>Comment: </Label>
                <InputText
                    type="text"
                    value={comment}
                    onChange={this.handleChangeInputComment}
                />
            
                <Label>Rating: </Label>
                    <Rater total={5} rating={rating} onRate={this.handleChangeInputRating}/>
                   <label> </label>
                
                <div> </div>

                <Button onClick={this.handleIncludeFeedback}>Add Feedback</Button>
                
            </Wrapper>
        )
    }
}

export default FeedbackInsert