import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import PremiumTemplate from './demos/premium-template';
import CafeDemo from './demos/cafe-greek';
import SalonDemo from './demos/hair-salon-greek';
import LawDemo from './demos/law-office-greek';
import TutoringDemo from './demos/tutoring-greek';
import GymDemo from './demos/gym-greek';
import ElectricianDemo from './demos/electrician-greek';
import RealEstateDemo from './demos/real-estate-greek';
import MedicalDemo from './demos/medical-greek';
import HotelDemo from './demos/hotel-greek';
import AccountingDemo from './demos/accounting-greek';
import RestaurantDemo from './demos/restaurant-greek';
import StudioDemo from './demos/studio-greek';
import MainLayout from './components/layout/MainLayout';
import DemoLayout from './components/layout/DemoLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout><Dashboard /></MainLayout>} />

        {/* All Demos wrapped in the Demo Layout (Nav Bar, Overlay) */}
        <Route element={<DemoLayout />}>
          <Route path="/demos/premium-template" element={<PremiumTemplate />} />
          <Route path="/demos/cafe-greek" element={<CafeDemo />} />
          <Route path="/demos/hair-salon-greek" element={<SalonDemo />} />
          <Route path="/demos/law-office-greek" element={<LawDemo />} />
          <Route path="/demos/tutoring-greek" element={<TutoringDemo />} />
          <Route path="/demos/gym-greek" element={<GymDemo />} />
          <Route path="/demos/electrician-greek" element={<ElectricianDemo />} />
          <Route path="/demos/real-estate-greek" element={<RealEstateDemo />} />
          <Route path="/demos/medical-greek" element={<MedicalDemo />} />
          <Route path="/demos/hotel-greek" element={<HotelDemo />} />
          <Route path="/demos/accounting-greek" element={<AccountingDemo />} />
          <Route path="/demos/restaurant-greek" element={<RestaurantDemo />} />
          <Route path="/demos/studio-greek" element={<StudioDemo />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
