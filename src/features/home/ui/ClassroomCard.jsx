function ClassroomCard({ roomName, capacity }) {
  return (
    <article className='h-[213px] w-[165px] overflow-hidden rounded-lg border border-[#e5e7eb] bg-white'>
      <div className='h-[127px] bg-gachon-light-blue' />
      <div className='px-4 py-5'>
        <h2 className='m-0 text-xl leading-6 font-extrabold tracking-normal text-[#111827]'>
          {roomName}
        </h2>
        <div className='mt-3 flex items-center gap-2 text-sm leading-5 font-medium text-[#7b8494]'>
          <svg className='size-4 shrink-0' viewBox='0 0 24 24' fill='none' aria-hidden='true'>
            <path
              d='M8 2v4M16 2v4M3 10h18M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <span>수용 인원: {capacity}명</span>
        </div>
      </div>
    </article>
  );
}

export default ClassroomCard;
