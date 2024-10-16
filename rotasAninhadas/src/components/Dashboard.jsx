import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="overview">Overview</Link></li>
          <li><Link to="settings">Settings</Link></li>
          <li><Link to="reports">Reports</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Dashboard;
