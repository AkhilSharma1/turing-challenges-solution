import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import { AppRouter } from './AppRouter';
import { Footer } from './components/Footer.component';

const App: React.FC = () => {
  React.useEffect(() => {
    axios.get('http://localhost:5000/api').then(res => console.log(res))

  }, [])


  return (
    <div className="root">
      {/* <AppRouter /> */}
      <Footer/>
    </div>

    

  );
}

export default App;
