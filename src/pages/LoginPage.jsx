import LoginHeader from '../features/login/ui/LoginHeader';
import UserLoginButton from '../features/login/ui/UserLoginButton';

function LoginPage() {
  return (
    <main className='flex min-h-svh items-center justify-center bg-primary-white p-6'>
      <section
        className='flex w-full max-w-[448px] flex-col gap-10 rounded-lg bg-white px-8 pt-8 pb-8 shadow-[0_24px_38px_-12px_rgb(0_0_0_/_0.24)] max-[520px]:px-6'
        aria-labelledby='login-title'
      >
        <LoginHeader />
        <UserLoginButton />
      </section>
    </main>
  );
}

export default LoginPage;
