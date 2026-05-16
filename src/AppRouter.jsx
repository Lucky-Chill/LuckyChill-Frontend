import { Navigate, Route, Routes } from 'react-router-dom';
import MyReservations from './pages/MyReservations';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import Reservation from './pages/Reservation';

function AppRouter() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/reservation' element={<Reservation />} />
      <Route path='/reservation/:classroomId' element={<Reservation />} />
      <Route path='/my/reservations' element={<MyReservations />} />
      <Route path='/admin' element={<AdminPage />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
}

export default AppRouter;
