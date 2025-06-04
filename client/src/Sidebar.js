import React from 'react';

function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md p-6 flex flex-col">
      <h2 className="text-2xl font-bold mb-8 text-blue-600">Aydınlar Blog</h2>
      <nav className="flex flex-col gap-4">
        <a href="#" className="text-gray-700 hover:text-blue-600">Ana Sayfa</a>
        <a href="#" className="text-gray-700 hover:text-blue-600">Yazılar</a>
        <a href="#" className="text-gray-700 hover:text-blue-600">Hakkımızda</a>
        <a href="#" className="text-gray-700 hover:text-blue-600">İletişim</a>
      </nav>
      <div className="mt-auto pt-8 text-xs text-gray-400">
        &copy; 2025 Aydınlar Blog
      </div>
    </aside>
  );
}

export default Sidebar;