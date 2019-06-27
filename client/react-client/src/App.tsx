import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import { AppRouter } from './AppRouter';

const App: React.FC = () => {
  React.useEffect(() => {
    axios.get('http://localhost:5000/api').then(res => console.log(res))

  }, [])


  return (
    // <AppRouter></AppRouter>
    <div className="container">
      <AppRouter />
    </div>

  );
}

export default App;
