import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children }) => (
  <div className="container">
    <Header />
    <Sidebar />
    <main className="main-content">
      {children}
    </main>
  </div>
);

export default Layout;
