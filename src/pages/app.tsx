import { Router } from '@reach/router';

import PrivateRoute from '../components/PrivateRoute';
import Login from '../views/Login';
import Vote from '../views/Vote';

const App = () => {
  <Router basepath="/app">
    <PrivateRoute path="/vote" component={Vote} />
    <Login path="/login" />
  </Router>;
};

export default App;
