import { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import Navigation from './Navbar';

const Home = () => {
  // Global State
  const { userName, setUserName } = useContext(UserContext);

  // Local State
  const [textValue, setTextValue] = useState('');

  const changeUserName = (e) => {
    e.preventDefault();

    setTextValue('');
    setUserName(textValue);
  };

  return (
    <div>
      <Navigation />
      <h1>Hello {userName}</h1>
      <form onSubmit={changeUserName}>
        <input type='text' value={textValue} onChange={(e) => setTextValue(e.target.value)} />
        <button type='submit'>Change User Name</button>
      </form>
    </div>
  );
};

export default Home;
