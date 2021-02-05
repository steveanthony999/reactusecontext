import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import Navigation from './Navbar';

const Home = () => {
  const { userName, setUserName } = useContext(UserContext);

  //   const updateUserName = () => {
  //     setUserName('The Steve');
  //   };

  return (
    <div>
      <Navigation />
      <h1>Hello {userName}</h1>
      <button onClick={() => setUserName('The Steve')}>Update User Name</button>
    </div>
  );
};

export default Home;
