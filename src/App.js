
import './App.css';

import Ashpazi from './Components/Ashpazi'
import Shirini from './Components/Shirini'
import Golarayi from './Components/Golarayi'
import  Sport   from './Components/Sport'
import  Science   from './Components/Science'
import  Art       from './Components/Art'
import  Login      from './Components/Login'
import firstpage  from './Components/Css/firstpage.css'
import { createBrowserHistory } from "history"
import Home from './Components/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  // BrowserHistory
  // useRouteMatch
} from "react-router-dom";
// import './Components/Mycss'
const history = createBrowserHistory();
function App() {
  return (
    <div className="App">
      
      <Router  history={history}>
          
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/Ashpazi" component={Ashpazi}></Route>
              <Route exact path="/Shirini" component={Shirini}></Route>
              <Route exact path="/Golarayi" component={Golarayi}></Route>
              <Route exact path="/Sport" component={Sport}></Route>
              <Route exact path="/Science" component={Science}></Route>
              <Route exact path="/Art" component={Art}></Route>
              <Route exact path="/Login" component={Login}></Route>
            </Switch>
                
              
      </Router>
          
    </div>
  );
}

export default App;