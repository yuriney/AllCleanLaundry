import { Link } from 'react-router-dom';

const Sidebar = () => (
  <aside className="sidebar">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/">Dashboard</Link></li>
      <li><Link to="/orders">Orders</Link></li>
      <li><Link to="/settings">Settings</Link></li>
      <li><Link to="/health">Health Check</Link></li>
    </ul>
  </aside>
);

export default Sidebar;
