import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { FeedbackList, FeedbackInsert } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/feedbacks/list" exact component={FeedbackList} />
                <Route path="/feedbacks/create" exact component={FeedbackInsert} />
                
            </Switch>
        </Router>
    )
}

export default App