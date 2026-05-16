const TEST_ACCOUNT = {
  label: '테스트 계정 정보',
  user: '일반 사용자: user@example.com',
};

function TestAccountInfo() {
  return (
    <aside className='mt-4 rounded-[9px] bg-primary-white px-5 py-4 text-center'>
      <p className='m-0 text-sm leading-5 font-medium text-[#6b7280]'>{TEST_ACCOUNT.label}</p>
      <p className='m-0 mt-1 text-sm leading-5 text-[#6b7280]'>{TEST_ACCOUNT.user}</p>
    </aside>
  );
}

export default TestAccountInfo;
