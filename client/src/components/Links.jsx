import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    Customer Feedback Application 
                    
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/feedbacks/Home" className="nav-link">
                                Home 
                            </Link>
                        </Item>
                        {/* <Item>
                            <Link to="/feedbacks/create" className="nav-link">
                                Create New Feedback 
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/feedbacks/list" className="nav-link">
                                List Feedbacks 
                            </Link>
                        </Item> */}
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links