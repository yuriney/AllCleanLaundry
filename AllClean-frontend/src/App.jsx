import { useEffect, useState } from 'react';

function App() {
  const [healthStatus, setHealthStatus] = useState(null);

  useEffect(() => {
    fetch('https://allcleanlaundry-production.up.railway.app/healthcheck')
      .then(response => response.json())
      .then(data => setHealthStatus(data))
      .catch(error => console.error('Error fetching healthcheck:', error));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Laundry Service Frontend is running 🚀</h1>
      <h2>Backend Status:</h2>
      {healthStatus ? (
        <pre>{JSON.stringify(healthStatus, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
