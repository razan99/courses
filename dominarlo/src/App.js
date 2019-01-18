import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Home from './container/home'
import Course from './container/courses'
import InstructorRegistration from './container/instractorRegistrationPage'
import Newcourse from './container/newcourse'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/course' component={Course} />
            <Route exact path='/new-course' component={Newcourse} />
            <Route exact path='/instructor-registration' component={InstructorRegistration} />
            <Route exact path='*' render={() => <h1>Page not found</h1>} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App