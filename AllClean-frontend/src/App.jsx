import { useEffect, useState } from 'react';
import Layout from './components/Layout';
import './Styles.css';

function App() {
  const [healthStatus, setHealthStatus] = useState(null);

  useEffect(() => {
    fetch('https://allcleanlaundry-production.up.railway.app/healthcheck')
      .then(response => response.json())
      .then(data => setHealthStatus(data))
      .catch(error => console.error('Error fetching healthcheck:', error));
  }, []);

  return (
    <Layout>
      <div style={{ textAlign: 'center' }}>
        <div style={{
          borderRadius: '10px',
          backgroundColor: '#C5D8D1',
          padding: '1rem',
          marginBottom: '1rem'
        }}>
          <h1>Laundry Service Frontend is running 🚀</h1>
          <h2>Backend Status:</h2>
        </div>

        {healthStatus ? (
          <pre style={{ fontFamily: 'monospace' }}>
            {JSON.stringify(healthStatus, null, 2)}
          </pre>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </Layout>
  );
}

export default App;
