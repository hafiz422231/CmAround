import React,{Component} from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from './screens/LoginPage/LoginPage';
import {withRouter} from 'react-router';
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.jsx';
import MainScreen from './screens/MainScreen/MainScreen';


const PrivateRoute = ({ component: Component , ...rest }) => (

  <Route 
    {...rest}
    render={props => 
      
      localStorage.getItem("authToken") ? (
        <Component {...props} />
      )
      :
      (
        <Redirect 
         to={{
           pathname:"/",
           state: {from: props.location}
         }}
        />
      )
    }
  
  />

);


class ComAround extends Component {
  constructor(props){

    super(props);
    
    this.state = {

    };

  }

  render() {
    const {location} = this.props;
    
    return (

    <div className="App">
      	

      		{ location.pathname !== '/' && <Header /> }
        <Switch>

            { !localStorage.getItem("authToken") && 
            <Route exact path="/" component={LoginPage} /> }
            <PrivateRoute path="/main" component={MainScreen} />

        </Switch> 
        { location.pathname !== '/' && <Footer /> }
    </div>
   );
  }
}

export default withRouter(ComAround);
