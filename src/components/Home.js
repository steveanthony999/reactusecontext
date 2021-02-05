import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import Navigation from './Navbar';

const Home = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <Navigation />
      <h1>Hello {user}</h1>
    </div>
  );
};

export default Home;
