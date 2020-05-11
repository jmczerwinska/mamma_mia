import React from 'react';
import './App.scss';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

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
