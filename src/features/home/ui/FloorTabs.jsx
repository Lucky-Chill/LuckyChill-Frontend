const FLOORS = ['3F', '4F', '5F'];

function FloorTabs({ activeFloor, onFloorChange }) {
  return (
    <div className='flex gap-4' aria-label='강의실 층 선택'>
      {FLOORS.map((floor) => {
        const isActive = floor === activeFloor;

        return (
          <button
            key={floor}
            className={`h-[40px] w-[68px] cursor-pointer rounded-2xl border-none text-[30px] leading-none font-semibold transition-colors ${
              isActive
                ? 'bg-gachon-blue text-white'
                : 'bg-[#f3f4f6] text-gachon-blue hover:bg-gachon-light-blue'
            }`}
            type='button'
            aria-pressed={isActive}
            onClick={() => onFloorChange(floor)}
          >
            {floor}
          </button>
        );
      })}
    </div>
  );
}

export default FloorTabs;
