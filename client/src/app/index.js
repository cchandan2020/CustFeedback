import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { NavBar } from '../components'
import { FeedbackContainer, RatingChart, FeedbackList, FeedbackInsert } from '../pages'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';


function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/feedbacks/Home" exact component={FeedbackContainer} />
                
            </Switch>
            
        </Router>
    )
}

export default App