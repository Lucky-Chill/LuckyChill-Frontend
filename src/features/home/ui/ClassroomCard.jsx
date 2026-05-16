import CalendarIcon from "../../../assets/calendar.svg";

function ClassroomCard({ roomName, capacity, onClick }) {
  return (
    <button
      className='h-[248px] w-[200px] cursor-pointer overflow-hidden rounded-lg border-none bg-white p-0 text-left shadow-[0_8px_22px_-16px_rgb(0_0_0_/_0.45)] transition-shadow hover:shadow-[0_12px_28px_-16px_rgb(0_0_0_/_0.55)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-gachon-light-blue'
      type='button'
      onClick={onClick}
    >
      <div className='h-[148px] rounded-t-lg bg-gachon-light-blue' />
      <div className='px-5 py-5'>
        <h2 className='m-0 text-base leading-6 font-bold tracking-normal text-text-primary'>
          {roomName}
        </h2>
        <div className='mt-2.5 flex items-center gap-2 text-xs leading-5 font-medium text-text-muted'>
          <img src={CalendarIcon} alt='캘린더 아이콘' className='size-4 shrink-0' />
          <span>수용 인원: {capacity}명</span>
        </div>
      </div>
    </button>
  );
}

export default ClassroomCard;
