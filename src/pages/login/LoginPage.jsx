import AdminLoginButton from '../../features/login/ui/AdminLoginButton';
import LoginDivider from '../../features/login/ui/LoginDivider';
import LoginHeader from '../../features/login/ui/LoginHeader';
import TestAccountInfo from '../../features/login/ui/TestAccountInfo';
import UserLoginButton from '../../features/login/ui/UserLoginButton';

function LoginPage() {
  return (
    <main className='flex min-h-svh items-center justify-center bg-primary-white p-6'>
      <section
        className='flex w-full max-w-[486px] flex-col rounded-[18px] bg-white px-9 pt-7 pb-8 shadow-[0_24px_38px_-12px_rgb(0_0_0_/_0.24)] max-[520px]:px-6 max-[520px]:pt-7 max-[520px]:pb-7'
        aria-labelledby='login-title'
      >
        <LoginHeader />

        <div className='mt-10 flex flex-col gap-7'>
          <UserLoginButton />
          <LoginDivider />
          <AdminLoginButton />
        </div>

        <TestAccountInfo />
      </section>
    </main>
  );
}

export default LoginPage;
