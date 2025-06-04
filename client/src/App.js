import React, { useState } from 'react';
import Sidebar from './Sidebar';
import './App.css';

function App() {
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
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-8 text-center">Blog Yazıları</h1>
        {posts.map(post => (
          <div key={post.id} className="border border-gray-200 rounded-lg p-6 mb-6 shadow-sm bg-white">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-700">{post.content}</p>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
