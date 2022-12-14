import logo from './logo.svg';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from './containers/Signin';
import Home from './containers/Home/index';
import Signup from './containers/Signup';

import PrivateRoute from './components/HOC/PrivateRoute';
import { isUserLoggedIn} from "./actions";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";


function App() {
   
  const dispatch = useDispatch();
const auth = useSelector(state => state.auth);

useEffect(() => {
  if(!auth.authenticate){
  dispatch(isUserLoggedIn());

}
  



}, []);



  return (
    
      <div>
      
      <Header/>
      <Switch>
        <PrivateRoute path="/" exact component={Home}/>
        
        <Route path="/signup" component={Signup}/>
        <Route path="/signin" component={Signin}/>


        
      </Switch>
      
      </div>
      
    
  );
}

export default App;
