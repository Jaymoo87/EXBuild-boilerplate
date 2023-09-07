import React, { useEffect, useState } from 'react';
import { fetchData } from './services/fetchService';

interface AppProps {}

const App = (props: AppProps) => {
  const [data, setData] = useState('');

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      document.body.classList.add('debug-screens');
    }
  }, []);

  useEffect(() => {
    fetchData('/api/hello')
      .then((data) => setData(data.message))
      .catch(() => console.log('Error: true'));
  }, []);

  return (
    <div className="container">
      <h1 className="text-blue-500 text-center font-bold bg-blue-900 p-10 rounded-md">Hello {data}</h1>
      <button className="btn-primary">Button Test</button>
    </div>
  );
};

export default App;
