import React from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleBook from './pages/SingleBook'
import Error from './pages/Error'
// import components
import Navbar from './components/Navbar'
function App() {
  return (
    <Router>
     <Navbar/>

     <Switch>
       <Route exact path="/">
         <Home/>
       </Route> 

       <Route  path="/about">
         <About/>
       </Route>

      <Route path="/book/:id">
      <SingleBook/>
      </Route>
        
       <Route  path="*">
         <Error/>
       </Route>
     </Switch>
    </Router>
  )
}

export default App
