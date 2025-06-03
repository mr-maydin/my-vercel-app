import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // Örnek blog verisi
  const [posts] = useState([
    {
      id: 1,
      title: 'İlk Blog Yazısı',
      content: 'Hamilelikten sonra vücut değişiklikleri hakkında bilgilendirici bir yazı. Bu yazıda hamilelik sonrası vücut değişiklikleri, kilo verme yöntemleri ve sağlıklı yaşam ipuçları ele alınacaktır.'
    },
    {
      id: 2,
      title: 'İkinci Yazı',
      content: '2.ayda hamilelik belirtileri, bebeğin gelişimi ve anne adayının sağlığı hakkında bilgiler. Bu yazıda, 2. ayda hamilelik belirtileri, bebeğin gelişimi ve anne adayının sağlığı hakkında bilgiler verilecektir.'
    }
  ]);

  return (
    <div className="App" style={{ maxWidth: 600, margin: '3rem auto', fontFamily: 'sans-serif' }}>
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
