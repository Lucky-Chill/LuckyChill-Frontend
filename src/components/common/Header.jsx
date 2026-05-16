import { useNavigate } from 'react-router-dom';
import bellIcon from '../../assets/alarm.svg';
import profileIcon from '../../assets/profile.svg';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className='h-14 flex justify-between items-center px-5 border-b border-[#e0e0e0] bg-white shrink-0'>
      <button
        className='cursor-pointer border-none bg-transparent p-0 text-base font-bold text-[#2563EB]'
        type='button'
        onClick={() => navigate('/home')}
      >
        컴퓨터공학과
      </button>

      <div className='flex gap-3 items-center'>
        <button
          className='relative p-1 bg-transparent border-none cursor-pointer'
          aria-label='알림'
        >
          <img src={bellIcon} alt='알림' className='w-6 h-6' />
          <span className='absolute top-0.5 right-0.5 w-[7px] h-[7px]' />
        </button>

        <button className='p-1 bg-transparent border-none cursor-pointer' aria-label='프로필'>
          <img src={profileIcon} alt='프로필' className='w-6 h-6' />
        </button>
      </div>
    </header>
  );
};

export default Header;
