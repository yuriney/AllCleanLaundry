import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/pages/Dashboard';
import HealthCheck from './components/pages/Healthcheck';
import Orders from './components/pages/Orders';
import Settings from './components/pages/Settings';
import './Styles.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/health" element={<HealthCheck />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
