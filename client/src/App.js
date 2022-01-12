import React from 'react';
import { toast } from 'react-toastify';
import './App.scss';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

toast.configure();
function App({ children }) {
  return (
    <div className="app">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default App;
