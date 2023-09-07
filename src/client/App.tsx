import React, { useEffect, useState } from 'react';
import { fetchData } from './services/fetchService';

interface AppProps {}

const App = (props: AppProps) => {
  const [data, setData] = useState('');

  useEffect(() => {
    fetchData('/api/hello')
      .then((data) => setData(data.message))
      .catch(() => console.log('Error: true'));
  }, []);

  return (
    <div className="container">
      <h1 className="text-red-700 bg-blue-800">Hello {data}</h1>
    </div>
  );
};

export default App;
