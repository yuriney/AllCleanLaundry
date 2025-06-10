import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <h1>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
        AllClean Laundry
      </Link>
    </h1>
  </header>
);

export default Header;
