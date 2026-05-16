import { FLOORS } from '../../classroom/constants/classrooms';

function FloorTabs({ activeFloor, onFloorChange }) {
  return (
    <div className='flex gap-3' aria-label='강의실 층 선택'>
      {FLOORS.map((floor) => {
        const isActive = floor === activeFloor;

        return (
          <button
            key={floor}
            className={`h-11 w-20 cursor-pointer rounded-lg border-none text-sm leading-none font-semibold transition-colors ${
              isActive
                ? 'bg-gachon-blue text-white'
                : 'bg-surface-soft text-gachon-blue hover:bg-gachon-light-blue'
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
