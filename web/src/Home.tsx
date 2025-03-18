import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="flex space-x-4 mb-6">
        <a href="/vite" className="transition-transform transform hover:scale-110">
          <img src={viteLogo} className="w-20 h-20" alt="Vite logo" />
        </a>
        <a href="/react" className="transition-transform transform hover:scale-110">
          <img src={reactLogo} className="w-20 h-20" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Vite + React</h1>
      <div className="bg-white shadow-lg rounded-lg p-6 text-center">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-all"
        >
          count is {count}
        </button>
        <p className="mt-4 text-gray-600">
          Edit <code className="bg-gray-200 px-2 py-1 rounded-md">src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="mt-6 text-gray-500 text-sm text-center">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}
