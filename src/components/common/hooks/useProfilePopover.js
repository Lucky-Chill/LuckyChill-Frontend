import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMe, logout } from '../../../apis/userApi';

const MENU_PATHS = {
  info: '/my/info',
  reservations: '/my/reservations',
  login: '/login',
};

/**
 * 프로필 팝오버의 유저 정보 조회와 메뉴 동작을 관리합니다.
 * @param {Object} params
 * @param {() => void} params.onClose
 * @returns {{ email: string, menuItems: Array<{ label: string, onClick: Function }> }}
 */
const useProfilePopover = ({ onClose }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  useEffect(() => {
    getMe()
      .then((res) => setEmail(res.data.email))
      .catch(() => setEmail(''));
  }, []);

  const handleNavigate = (path) => {
    navigate(path);
    onClose();
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch {
      // 서버 오류와 무관하게 클라이언트 세션 정리
    } finally {
      localStorage.removeItem('token');
      onClose();
      navigate(MENU_PATHS.login);
    }
  };

  return {
    email,
    menuItems: [
      { label: '내 정보', onClick: () => handleNavigate(MENU_PATHS.info) },
      { label: '나의 예약 현황', onClick: () => handleNavigate(MENU_PATHS.reservations) },
      { label: '로그아웃', onClick: handleLogout },
    ],
  };
};

export default useProfilePopover;
