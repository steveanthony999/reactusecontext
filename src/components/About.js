import Navbar from './Navbar';
import { UserContext } from '../contexts/UserContext';
import { useContext } from 'react';

const About = () => {
  const { userName } = useContext(UserContext);

  return (
    <div>
      <Navbar />
      <h1>About Page</h1>
      <h2>All About {userName}</h2>
    </div>
  );
};

export default About;
