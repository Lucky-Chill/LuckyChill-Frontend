import googleLogo from '../../../assets/google_logo.svg';

function UserLoginButton() {
  return (
    <button
      className='flex h-[51px] w-full cursor-pointer items-center justify-center gap-7 rounded-lg border-2 border-[#d1d5dc] bg-white px-5 text-base leading-6 font-medium text-[#364153] transition-[border-color,box-shadow,transform] duration-150 ease-in-out hover:border-middle-blue hover:shadow-[0_8px_16px_-12px_rgb(0_0_0_/_0.3)] active:translate-y-px focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-gachon-light-blue'
      type='button'
    >
      <img className='block size-5 shrink-0' src={googleLogo} alt='' aria-hidden='true' />
      <span>Google로 계속하기</span>
    </button>
  );
}

export default UserLoginButton;
