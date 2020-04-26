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

// Admin pages
import Dashboard from './components/Pages/Admin/Dashboard'
import Users from './components/Pages/Admin/Users'
import Posts from './components/Pages/Admin/Posts'
import AddPost from './components/Pages/Admin/AddPost'

import AdminWrapper from './components/AdminWrapper'
import LoginWrapper from './components/LoginWrapper'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route
            path="/admin/users"
            render={(props) => {
              return (
                <div>
                  {this.props.auth.token ? (
                    <AdminWrapper>
                      <Users />
                    </AdminWrapper>
                  ) : (
                      <LoginWrapper>
                        <Login />
                      </LoginWrapper>
                    )}
                </div>
              );
            }}
          />

          <Route
            path="/admin/posts/:view/:id"
            exact={true}
            render={(props) => {
              return (
                <div>
                  {this.props.auth.token ? (
                    <AdminWrapper>
                      <AddPost />
                    </AdminWrapper>
                  ) : (
                      <LoginWrapper>
                        <Login />
                      </LoginWrapper>
                    )}
                </div>
              );
            }}
          />

          <Route
            path="/admin/posts/:view"
            exact={true}
            render={(props) => {
              return (
                <div>
                  {this.props.auth.token ? (
                    <AdminWrapper>
                      <AddPost />
                    </AdminWrapper>
                  ) : (
                      <LoginWrapper>
                        <Login />
                      </LoginWrapper>
                    )}
                </div>
              );
            }}
          />
          <Route
            path="/admin/posts"
            exact={true}
            render={(props) => {
              return (
                <div>
                  {this.props.auth.token ? (
                    <AdminWrapper>
                      <Posts />
                    </AdminWrapper>
                  ) : (
                      <LoginWrapper>
                        <Login />
                      </LoginWrapper>
                    )}
                </div>
              );
            }}
          />
          <Route
            path='/admin'
            exact={true}
            render={(props) => (
              <div>
                {this.props.auth.token ? (
                  <AdminWrapper>
                    <Dashboard />
                  </AdminWrapper>
                ) : (
                    <LoginWrapper>
                      <Login />
                    </LoginWrapper>
                  )}
              </div>
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
