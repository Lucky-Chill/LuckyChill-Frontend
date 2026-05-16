/**
 * 공통 헤더 컴포넌트
 * @description 학과명(로고), 알림 아이콘, 프로필 아이콘 + 팝오버를 포함하는 상단 헤더입니다.
 */
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bellIcon from '../../assets/alarm.svg';
import profileIcon from '../../assets/profile.svg';
import ProfilePopover from './ProfilePopover';

const Header = () => {
  const navigate = useNavigate();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const profileWrapperRef = useRef(null);

  // 팝오버 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileWrapperRef.current && !profileWrapperRef.current.contains(e.target)) {
        setIsPopoverOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleProfileClick = () => {
    setIsPopoverOpen((prev) => !prev);
  };

  return (
    <header className='flex h-14 shrink-0 items-center justify-between border-b border-[#e0e0e0] bg-white px-5'>
      <button
        className='cursor-pointer border-none bg-transparent p-0 text-base font-bold text-[#2563EB]'
        type='button'
        onClick={() => navigate('/home')}
      >
        컴퓨터공학과
      </button>

      <div className='flex items-center gap-3'>
        <button
          className='relative cursor-pointer border-none bg-transparent p-1'
          aria-label='알림'
        >
          <img src={bellIcon} alt='알림' className='h-6 w-6' />
          <span className='absolute right-0.5 top-0.5 h-[7px] w-[7px]' />
        </button>

        {/* 프로필 아이콘 + 팝오버 래퍼 */}
        <div className='relative' ref={profileWrapperRef}>
          <button
            className='cursor-pointer border-none bg-transparent p-1'
            aria-label='프로필'
            onClick={handleProfileClick}
          >
            <img src={profileIcon} alt='프로필' className='h-6 w-6' />
          </button>

          {isPopoverOpen && <ProfilePopover onClose={() => setIsPopoverOpen(false)} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
