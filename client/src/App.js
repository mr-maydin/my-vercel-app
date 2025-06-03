import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // Örnek blog verisi
  const [posts] = useState([
    {
      id: 1,
      title: 'İlk Blog Yazısı',
      content: 'Bu, ilk blog yazınızın içeriğidir. React ile blog yapmak çok kolay!'
    },
    {
      id: 2,
      title: 'İkinci Yazı',
      content: 'İkinci yazınız burada. Dilerseniz yeni yazılar ekleyebilirsiniz.'
    }
  ]);

  return (
    <div className="App" style={{ maxWidth: 600, margin: '3rem auto', fontFamily: 'sans-serif' }}>
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
      <h1>Basit Blog</h1>
      {posts.map(post => (
        <div key={post.id} style={{ border: '1px solid #eee', borderRadius: 8, padding: 16, marginBottom: 24 }}>
          <h2 style={{ margin: '0 0 8px 0' }}>{post.title}</h2>
          <p style={{ margin: 0 }}>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
