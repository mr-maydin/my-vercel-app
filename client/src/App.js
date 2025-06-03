import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '3rem' }}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hoşgeldiniz!</h1>
        <p>Bu, Vercel üzerinde çalışan basit bir React önyüzüdür.</p>
        <p>
          Backend API için{' '}
          <a className="App-link" href="/api/api">
            /api/api
          </a>{' '}
          adresini ziyaret edebilirsiniz.
        </p>
      </header>
    </div>
  );
}

export default App;
