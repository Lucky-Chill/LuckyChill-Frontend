import googleLogo from '../../assets/google_logo.svg';
import univLogo from '../../assets/univ_logo.svg';

const TEST_ACCOUNT = {
  label: '테스트 계정 정보',
  user: '일반 사용자: user@example.com',
};

function AdminIcon() {
  return (
    <svg className='size-5 shrink-0' viewBox='0 0 24 24' fill='none' aria-hidden='true'>
      <path
        d='M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4.5 20a7.5 7.5 0 0 1 15 0'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

function LoginPage() {
  return (
    <main className='flex min-h-svh items-center justify-center bg-primary-white p-6'>
      <section
        className='flex w-full max-w-[486px] flex-col rounded-[18px] bg-white px-9 pt-7 pb-8 shadow-[0_24px_38px_-12px_rgb(0_0_0_/_0.24)] max-[520px]:px-6 max-[520px]:pt-7 max-[520px]:pb-7'
        aria-labelledby='login-title'
      >
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

        <div className='mt-10 flex flex-col gap-7'>
          <button
            className='flex h-[54px] w-full cursor-pointer items-center justify-center gap-7 rounded-[9px] border-2 border-[#d1d5dc] bg-white px-5 text-base leading-6 font-medium text-[#364153] transition-[border-color,box-shadow,transform] duration-150 ease-in-out hover:border-middle-blue hover:shadow-[0_8px_16px_-12px_rgb(0_0_0_/_0.3)] active:translate-y-px focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-gachon-light-blue'
            type='button'
          >
            <img className='block size-5 shrink-0' src={googleLogo} alt='' aria-hidden='true' />
            <span>일반 사용자로 로그인</span>
          </button>

          <div
            className='flex items-center gap-4 text-sm leading-5 text-[#6b7280]'
            aria-hidden='true'
          >
            <span className='h-px flex-1 bg-[#e5e7eb]' />
            <span>또는</span>
            <span className='h-px flex-1 bg-[#e5e7eb]' />
          </div>

          <button
            className='flex h-[55px] w-full cursor-pointer items-center justify-center gap-5 rounded-[9px] bg-mudang-red px-5 text-base leading-6 font-semibold text-white transition-[background-color,box-shadow,transform] duration-150 ease-in-out hover:bg-[#c91818] hover:shadow-[0_10px_18px_-12px_rgb(220_27_27_/_0.8)] active:translate-y-px focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-gachon-light-blue'
            type='button'
          >
            <AdminIcon />
            <span>관리자로 로그인</span>
          </button>
        </div>

        <aside className='mt-4 rounded-[9px] bg-primary-white px-5 py-4 text-center'>
          <p className='m-0 text-sm leading-5 font-medium text-[#6b7280]'>{TEST_ACCOUNT.label}</p>
          <p className='m-0 mt-1 text-sm leading-5 text-[#6b7280]'>{TEST_ACCOUNT.user}</p>
        </aside>
      </section>
    </main>
  );
}

export default LoginPage;
