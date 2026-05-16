function ClassroomCard({ roomName, capacity, onClick }) {
  return (
    <button
      className='h-[248px] w-[200px] cursor-pointer overflow-hidden rounded-lg border-none bg-white p-0 text-left shadow-[0_8px_22px_-16px_rgb(0_0_0_/_0.45)] transition-shadow hover:shadow-[0_12px_28px_-16px_rgb(0_0_0_/_0.55)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-gachon-light-blue'
      type='button'
      onClick={onClick}
    >
      <div className='h-[148px] rounded-t-lg bg-gachon-light-blue' />
      <div className='px-5 py-5'>
        <h2 className='m-0 text-base leading-6 font-bold tracking-normal text-[#111827]'>
          {roomName}
        </h2>
        <div className='mt-2.5 flex items-center gap-2 text-xs leading-5 font-medium text-[#7b8494]'>
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
    </button>
  );
}

export default ClassroomCard;
