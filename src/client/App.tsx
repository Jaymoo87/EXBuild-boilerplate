import React, { useEffect, useState } from 'react';

interface AppProps {}

const App = (props: AppProps) => {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/api/hello')
      .then((res) => res.json())
      .then((obj) => setData(obj.message));
  });

  return (
    <div className="mt-5">
      <h1 className="text-center text-info">Hello {data}</h1>
    </div>
  );
};

export default App;
