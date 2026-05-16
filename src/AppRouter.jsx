import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import LoginPage from './pages/login/LoginPage';
import Reservation from './pages/Reservation';
import MyReservations from './pages/my/MyReservations';

function AppRouter() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/reservation' element={<Reservation />} />
      <Route path='/my/reservations' element={<MyReservations />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
}

export default AppRouter;
