import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Overview from './components/Overview';
import Settings from './components/Settings';
import Reports from './components/Reports';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="overview" element={<Overview />} />
          <Route path="settings" element={<Settings />} />
          <Route path="reports" element={<Reports />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
