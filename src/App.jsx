import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import PremiumTemplate from './demos/premium-template';
import CafeDemo from './demos/cafe-greek';
import SalonDemo from './demos/hair-salon-greek';
import LawDemo from './demos/law-office-greek';
import TutoringDemo from './demos/tutoring-greek';
import MainLayout from './components/layout/MainLayout';
import DemoLayout from './components/layout/DemoLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout><Dashboard /></MainLayout>} />
        <Route path="/demos/premium-template" element={<PremiumTemplate />} />
        <Route path="/demos/cafe-greek" element={<CafeDemo />} />
        <Route path="/demos/hair-salon-greek" element={<SalonDemo />} />
        <Route path="/demos/law-office-greek" element={<LawDemo />} />
        <Route path="/demos/tutoring-greek" element={<TutoringDemo />} />
        {/* Future demos will be added here */}
      </Routes>
    </Router>
  );
}

export default App;
