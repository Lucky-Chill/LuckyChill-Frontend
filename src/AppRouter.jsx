import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import ReservationPage from './features/reservation/ReservationPage';

function AppRouter() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='*' element={<Navigate to='/' replace />} />
      <Route path='/reservation' element={<ReservationPage />} />
    </Routes>
  );
}

export default AppRouter;
