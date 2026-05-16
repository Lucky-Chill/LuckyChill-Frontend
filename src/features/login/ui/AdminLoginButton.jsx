import AdminIcon from './AdminIcon';

function AdminLoginButton() {
  return (
    <button
      className='flex h-[55px] w-full cursor-pointer items-center justify-center gap-5 rounded-[9px] bg-mudang-red px-5 text-base leading-6 font-semibold text-white transition-[background-color,box-shadow,transform] duration-150 ease-in-out hover:bg-[#c91818] hover:shadow-[0_10px_18px_-12px_rgb(220_27_27_/_0.8)] active:translate-y-px focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-gachon-light-blue'
      type='button'
    >
      <AdminIcon />
      <span>관리자로 로그인</span>
    </button>
  );
}

export default AdminLoginButton;
