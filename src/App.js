import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UserContext } from './contexts/UserContext';

import Home from './components/Home';
import About from './components/About';
import { useState, useMemo } from 'react';

function App() {
  const [userName, setUserName] = useState('Steve-O');

  const providerForUserName = useMemo(() => ({ userName, setUserName }), [userName, setUserName]);

  return (
    <Router>
      <Switch>
        <UserContext.Provider value={providerForUserName}>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
        </UserContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;
