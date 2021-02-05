import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UserContext } from './contexts/UserContext';

import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <Router>
      <Switch>
        <UserContext.Provider value='Steve'>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
        </UserContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;
