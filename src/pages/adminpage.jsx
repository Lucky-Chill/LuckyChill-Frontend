function AdminPage() {
  const reservations = [
    {
      room: '강의실 603',
      user: 'student5@gachon.ac.kr',
      date: '2026년 05월 22일',
      floor: '6층',
      time: '16:00 - 18:00 (3시간)',
      status: '승인 대기',
      statusClass: 'wait-badge',
    },
    {
      room: '강의실 507',
      user: 'student4@gachon.ac.kr',
      date: '2026년 05월 21일',
      floor: '5층',
      time: '10:00 - 11:00 (1시간)',
      status: '승인 완료',
      statusClass: 'complete-badge',
    },
  ];

  return (
    <div className='min-h-screen bg-surface-muted text-text-primary'>
      <header className='flex h-16 items-center gap-9 border-b border-border-default bg-white px-7'>
        <h1 className='shrink-0 text-[22px] font-extrabold text-gachon-blue'>
          컴퓨터공학과 게시판
        </h1>

        <div className='flex h-9 w-[270px] items-center gap-2 rounded-lg border border-border-default px-3'>
          <span>⌕</span>
          <input
            className='w-full border-none text-[13px] outline-none'
            placeholder='전체 게시판의 글을 검색하세요.'
          />
        </div>

        <div className='ml-auto flex gap-[18px] text-lg'>
          <span>🔔</span>
          <span>♡</span>
        </div>
      </header>

      <main className='px-7 py-6'>
        <h2 className='mb-[18px] text-[22px] font-extrabold'>관리자 페이지</h2>

        <section className='mb-[18px] flex gap-3'>
          <div className='relative h-[78px] w-[174px] rounded-lg border border-border-default bg-white p-[18px]'>
            <p className='mb-1 text-xs text-text-muted'>전체 신청</p>
            <strong>8</strong>
            <span className='absolute top-6 right-[18px] flex size-[38px] items-center justify-center rounded-full bg-gachon-blue-tint font-extrabold text-gachon-blue'>
              ▣
            </span>
          </div>

          <div className='relative h-[78px] w-[174px] rounded-lg border border-border-default bg-white p-[18px]'>
            <p className='mb-1 text-xs text-text-muted'>승인 대기</p>
            <strong className='text-2xl font-extrabold text-mudang-red'>6</strong>
            <span className='absolute top-6 right-[18px] flex size-[38px] items-center justify-center rounded-full bg-mudang-red-tint font-extrabold text-mudang-red'>
              ◷
            </span>
          </div>

          <div className='relative h-[78px] w-[174px] rounded-lg border border-border-default bg-white p-[18px]'>
            <p className='mb-1 text-xs text-text-muted'>승인 완료</p>
            <strong className='text-2xl font-extrabold text-success-green'>2</strong>
            <span className='absolute top-6 right-[18px] flex size-[38px] items-center justify-center rounded-full bg-success-green-tint font-extrabold text-success-green'>
              ✓
            </span>
          </div>
        </section>

        <section className='mb-[18px] flex gap-2 rounded-lg border border-border-default bg-white p-3'>
          <button
            className='cursor-pointer rounded-lg border-none bg-gachon-blue px-[15px] py-2.5 font-bold text-white'
            type='button'
          >
            전체
          </button>
          <button
            className='cursor-pointer rounded-lg border-none bg-surface-soft px-[15px] py-2.5 font-bold text-text-secondary'
            type='button'
          >
            승인 대기 (6)
          </button>
          <button
            className='cursor-pointer rounded-lg border-none bg-surface-soft px-[15px] py-2.5 font-bold text-text-secondary'
            type='button'
          >
            승인 완료 (2)
          </button>
        </section>

        <section className='overflow-hidden rounded-lg border border-border-default bg-white'>
          {reservations.map((item, index) => (
            <article
              className='flex min-h-[116px] items-center justify-between border-b border-border-default px-[22px] py-5 last:border-b-0'
              key={index}
            >
              <div>
                <h3 className='mb-3.5 text-base font-extrabold'>{item.room}</h3>

                <div className='flex items-start gap-6 text-xs leading-[1.45] text-text-secondary'>
                  <p>
                    ♙ 신청자:
                    <br />
                    {item.user}
                  </p>
                  <p>▣ {item.date}</p>
                  <p>⌖ {item.floor}</p>
                  <p>◷ {item.time}</p>
                </div>
              </div>

              <span
                className={`rounded-full px-[18px] py-2 text-lg font-extrabold ${
                  item.statusClass === 'wait-badge'
                    ? 'bg-mudang-red-tint text-mudang-red'
                    : 'bg-success-green-tint text-success-green'
                }`}
              >
                {item.status}
              </span>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}

export default AdminPage;
