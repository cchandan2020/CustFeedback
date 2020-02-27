import React, { Component } from 'react'
import api from '../api'

import {globalCustomer} from '../Services/global'

//mit library
// import StarRating from 'react-star-rating';

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
        const rating = event.target.validity.valid
            ? event.target.value
            : this.state.rating

        this.setState({ rating })
    }

    // put star rating handler 

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
        const payload = { name, email, rating, comment, time: arrayTime }

        globalCustomer.push(payload)
        console.log('This is global customer: \n', globalCustomer)

        await api.insertFeedback(payload).then(res => {
            window.alert(`Feedback added successfully`)
            this.setState({
                name: '',
                email: '',
                rating: '',
                comment: '',
                time: '',
            })
        })
    }

    render() {
        //const { name, email, rating, comment, time } = this.state
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
                <Label>Rating: </Label>
                <InputText
                    type="number"
                    step="0.1"
                    lang="en-US"
                    min="1"
                    max="5"
                    pattern="[0-9]+([,\.][0-9]+)?"
                    value={rating}
                    onChange={this.handleChangeInputRating}
                />

                    
                

                {/* <StarRating name="react-star-rating" caption="Rate this component!" totalStars={5} />
                <button type="submit" className="btn btn-primary">Submit Rating</button> */}

                <Label>Comment: </Label>
                <InputText
                    type="text"
                    value={comment}
                    onChange={this.handleChangeInputComment}
                />

                {/* <Label>Time: </Label>
                <InputText
                    type="text"
                    value={time}
                    onChange={this.handleChangeInputTime}
                /> */}

                <Button onClick={this.handleIncludeFeedback}>Add Feedback</Button>
                
            </Wrapper>
        )
    }
}

export default FeedbackInsert