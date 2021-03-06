import React, { Component } from 'react'
import styled from 'styled-components'

// import logo from '../logo.svg'
import logo from '../logoimage.jpeg'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

class Logo extends Component {
    render() {
        return (
            <Wrapper href="https://checkout.com">
                <img src={logo} width="50" height="50" alt="checkout.com" />
            </Wrapper>
        )
    }
}

export default Logo