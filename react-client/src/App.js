import './App.css';
import LoginPage from './components/login-register/LoginPage';
import 'bootstrap/dist/css/bootstrap.css'
import Register from './components/login-register/Register';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <h1>Home</h1>
          </Route>

          <Route path="/login">
            <div className='login-singin'>
              <LoginPage />
            </div>
          </Route>

          <Route path="/register">
            <div className='register'>
              <Register />
            </div>
          </Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;
