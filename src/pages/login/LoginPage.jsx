import googleLogo from '../../assets/google_logo.svg';
import univLogo from '../../assets/univ_logo.svg';

function LoginPage() {
  return (
    <main className='flex min-h-svh items-center justify-center bg-white p-6'>
      <section
        className='flex min-h-[243px] w-full max-w-[448px] flex-col gap-8 rounded-2xl bg-white px-8 pt-8 shadow-[0_20px_25px_-5px_rgb(0_0_0_/_0.1),0_8px_10px_-6px_rgb(0_0_0_/_0.1)] max-[520px]:gap-7 max-[520px]:px-6 max-[520px]:pt-7'
        aria-labelledby='login-title'
      >
        <div className='flex w-full flex-col gap-2'>
          <div className='flex min-h-16 items-center justify-center gap-14 max-[520px]:min-h-0 max-[520px]:gap-5'>
            <img className='block size-16 shrink-0' src={univLogo} alt='가천대학교 로고' />
            <h1
              id='login-title'
              className='m-0 text-center text-2xl leading-8 font-bold tracking-normal text-black max-[520px]:text-[22px]'
            >
              컴퓨터공학과
            </h1>
          </div>
          <p className='m-0 text-center text-base leading-6 font-normal text-[#4a5565]'>
            강의실 예약
          </p>
        </div>

        <button
          className='flex h-[51px] w-full cursor-pointer items-center justify-center gap-3 rounded-[10px] border-2 border-[#d1d5dc] bg-white p-3 text-base leading-6 font-medium text-[#364153] transition-[border-color,box-shadow,transform] duration-150 ease-in-out hover:border-[#b8bfca] hover:shadow-[0_8px_16px_-12px_rgb(0_0_0_/_0.3)] active:translate-y-px focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[rgb(66_133_244_/_0.35)]'
          type='button'
        >
          <img className='block size-5 shrink-0' src={googleLogo} alt='' aria-hidden='true' />
          <span>Google로 계속하기</span>
        </button>
      </section>
    </main>
  );
}

export default LoginPage;
