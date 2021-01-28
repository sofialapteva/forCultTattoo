import React from 'react'
import { Route } from 'react-router-dom'
import { Nav, Login, Register, Home } from './components/index'

function App() {
  return (
    <div>
      <Nav />
      <Route exact path='/' component={Home} />
      <Route path='/register' component={Register} />
      <Route path='/login' component={Login} />
    </div>
  );
}

export default App;
