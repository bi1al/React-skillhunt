import React from 'react';
import './Saas/index.css';
import Navbar from './Components/Navbar';
import { Switch, Route } from "react-router-dom";
import HomePage from './Pages/HomePage'
import BrowseJob from './Pages/BrowseJob'
import CondidatesPage from './Pages/CondidatesPage'
import BlogsPage from './Pages/BlogsPage'
import ContactPage from './Pages/ContactPage'
import Error from './Pages/Error'
  
function App() {
  return(
   <>
   <Navbar />
     <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/browesjob" component={BrowseJob} />
      <Route  exact path="/Condidate" component={CondidatesPage}  />
      <Route  exact path="/blog" component={BlogsPage} />
      <Route  exact path="/contact" component={ContactPage} />
      <Route path={Error}/>
      </Switch>
    </>
  )
}

export default App;
