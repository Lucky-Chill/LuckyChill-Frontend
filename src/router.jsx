import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';

function AppRouter() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
}

export default AppRouter;
