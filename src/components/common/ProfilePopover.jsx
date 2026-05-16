/**
 * 프로필 팝오버 컴포넌트
 * @description Header 우측 프로필 아이콘 클릭 시 노출되는 드롭다운 팝오버입니다.
 *              로그인 유저 이메일 표시, 내 정보/예약 현황 라우팅, 로그아웃을 처리합니다.
 */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMe, logout } from '../../apis/userApi';

/**
 * @param {Object}   props
 * @param {Function} props.onClose - 팝오버 닫기 콜백
 */
const ProfilePopover = ({ onClose }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  // 마운트 시 유저 이메일 조회
  useEffect(() => {
    getMe()
      .then((res) => setEmail(res.data.email))
      .catch(() => setEmail(''));
  }, []);

  /**
   * 메뉴 항목 클릭 — 해당 경로로 이동 후 팝오버 닫기
   * @param {string} path
   */
  const handleNavigate = (path) => {
    navigate(path);
    onClose();
  };

  /**
   * 로그아웃 — API 호출 후 토큰 삭제, 로그인 페이지로 리다이렉트
   */
  const handleLogout = async () => {
    try {
      await logout();
    } catch {
      // 서버 오류와 무관하게 클라이언트 세션 정리
    } finally {
      localStorage.removeItem('token');
      onClose();
      navigate('/login');
    }
  };

  const MENU_ITEMS = [
    { label: '내 정보', onClick: () => handleNavigate('/my/info') },
    { label: '나의 예약 현황', onClick: () => handleNavigate('/my/reservations') },
    { label: '로그아웃', onClick: handleLogout },
  ];

  return (
    <div
      className='absolute right-0 top-full z-50 mt-2 min-w-[200px] overflow-hidden rounded-xl bg-white shadow-[0_4px_16px_rgba(0,0,0,0.12)]'
      style={{ border: '1px solid #F1F5F9' }}
    >
      {/* 이메일 영역 */}
      <div className='border-b border-[#F1F5F9] px-5 py-[14px] text-sm text-[#1E293B]'>
        {email || '불러오는 중...'}
      </div>

      {/* 메뉴 항목 */}
      {MENU_ITEMS.map((item, idx) => (
        <button
          key={item.label}
          onClick={item.onClick}
          className={`w-full cursor-pointer border-none bg-white px-5 py-[14px] text-left text-sm text-[#1E293B] transition-colors hover:bg-[#F8FAFC] ${
            idx < MENU_ITEMS.length - 1 ? 'border-b border-[#F1F5F9]' : ''
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default ProfilePopover;
