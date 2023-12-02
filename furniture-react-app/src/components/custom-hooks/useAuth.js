import { useState, useEffect } from 'react';
import axios from 'axios';

const useAuth = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    axios.get('/api/current-user') // Replace with your server route to get the current user
      .then(response => setCurrentUser(response.data))
      .catch(error => setCurrentUser(null));
  }, []);

  return { currentUser };
};

export default useAuth;