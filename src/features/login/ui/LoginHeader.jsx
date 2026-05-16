import univLogo from '../../../assets/univ_logo.svg';

function LoginHeader() {
  return (
    <header className='flex flex-col items-center gap-5'>
      <div className='flex min-h-20 items-center justify-center gap-16 max-[520px]:gap-6'>
        <img className='block size-[68px] shrink-0' src={univLogo} alt='가천대학교 로고' />
        <h1
          id='login-title'
          className='m-0 text-center text-[30px] leading-9 font-extrabold tracking-normal text-black max-[520px]:text-2xl'
        >
          컴퓨터공학과
        </h1>
      </div>
      <p className='m-0 text-center text-[17px] leading-6 font-normal text-[#4a5565]'>
        강의실 예약 시스템
      </p>
    </header>
  );
}

export default LoginHeader;
