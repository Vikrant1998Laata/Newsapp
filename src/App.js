import './App.css';
// Class based Component
// rcc

import React, { useState } from 'react'
import NavBar from './componentj/NavBar';
import News from './componentj/News';
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

 const App =()=>  {
  const pageSize = 5;
  const apikey = process.env.REACT_APP_NEWS_API  // accessing the api key 
  // apikey = "8238d6b14fe1499f9a74400c70625f9e"

  // Setting intial state progress 0
  // state = {
  //   progress:0
  // }

  const [progress, setProgress] = useState(0)
  
  // writing a function to implement loading Bar
  // setProgress = (progress)=>{
  //  setState({progress: progress})
  // }


 
    return (
      <div>
        <Router>
        <NavBar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
  
      />
        {/* <News serProgress={setProgress}     pageSize={pageSize} country="in" category="sports" />  */}
        <Switch>
          <Route exact path="/"><News setProgress={setProgress} apikey={apikey}     key="general" pageSize={pageSize} country="in" category="general" /></Route>
          <Route exact path="/business"><News setProgress={setProgress} apikey={apikey}     key="business" pageSize={pageSize} country="in" category="business" /></Route>
          <Route exact path="/entertainment"><News setProgress={setProgress} apikey={apikey}     key="entertainment" pageSize={pageSize} country="in" category="entertainment" /></Route>
          <Route exact path="/health"><News setProgress={setProgress} apikey={apikey}     key="health" pageSize={pageSize} country="in" category="health" /></Route>
          <Route exact path="/science"><News setProgress={setProgress} apikey={apikey}     key="science" pageSize={pageSize} country="in" category="science" /></Route>
          <Route exact path="/sports"><News setProgress={setProgress} apikey={apikey}     key="sports" pageSize={pageSize} country="in" category="sports" /></Route>
          <Route exact path="/technology"><News setProgress={setProgress} apikey={apikey}     key="technology" pageSize={pageSize} country="in" category="technology" /></Route>          
        </Switch>
        </Router>
      </div>
    )
  
}

export default App;

