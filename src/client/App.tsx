import React, { useState } from 'react';

interface AppProps {}

const App = (props: AppProps) => {
  const [data, setData] = useState('World');

  return (
    <div className="mt-5">
      <h1 className="text-center text-info">Hello {data}</h1>
    </div>
  );
};

export default App;
