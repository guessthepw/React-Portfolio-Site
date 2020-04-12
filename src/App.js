import React, { Component } from 'react'
import PageWrapper from './components/PageWrapper'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

// Pages
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'
import Services from './components/Pages/Services'
import Portfolio from './components/Pages/Portfolio'
import Team from './components/Common/Team'
import Login from './components/Pages/Login'

import Dashboard from './components/Pages/Dashboard'
import AdminWrapper from './components/AdminWrapper'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route
            path='/admin'
            render={(props) => (
              <AdminWrapper>
                {this.props.auth.token ? <Dashboard /> : <Login />}
              </AdminWrapper>
            )}
          />

          <Route
            path='/'
            exact={true}
            render={(props) => (
              <PageWrapper>
                <Home {...props} />
              </PageWrapper>
            )}
          />
          <Route
            path='/about'
            exact={true}
            render={(props) => (
              <PageWrapper>
                <About {...props} />
              </PageWrapper>
            )}
          />
          <Route
            path='/contact'
            exact={true}
            render={(props) => (
              <PageWrapper>
                <Contact {...props} />
              </PageWrapper>
            )}
          />
          <Route
            path='/services'
            exact={true}
            render={(props) => (
              <PageWrapper>
                <Services {...props} />
              </PageWrapper>
            )}
          />
          <Route
            path='/portfolio'
            exact={true}
            render={(props) => (
              <PageWrapper>
                <Portfolio {...props} />
              </PageWrapper>
            )}
          />
          <Route
            path='/team'
            exact={true}
            render={(props) => (
              <PageWrapper>
                <Team {...props} />
              </PageWrapper>
            )}
          />
        </Router>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
