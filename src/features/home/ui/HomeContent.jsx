import useHomeClassrooms from '../hooks/useHomeClassrooms';
import ClassroomCard from './ClassroomCard';
import FloorTabs from './FloorTabs';

function HomeContent() {
  const { activeFloor, classrooms, setActiveFloor, handleClassroomClick } = useHomeClassrooms();

  return (
    <section className='flex h-full flex-col overflow-hidden pt-10 pb-10'>
      <h1 className='m-0 text-2xl leading-8 font-bold tracking-normal text-text-primary'>
        강의실 예약
      </h1>

      <div className='mt-8'>
        <FloorTabs activeFloor={activeFloor} onFloorChange={setActiveFloor} />
      </div>

      <div className='scrollbar-hidden mt-5 flex-1 overflow-y-auto pt-6'>
        <div className='grid grid-cols-1 justify-items-center gap-6 pb-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-[repeat(5,200px)] xl:justify-between xl:gap-y-10'>
          {classrooms.map((classroom) => (
            <ClassroomCard
              key={classroom.id}
              roomName={classroom.roomName}
              capacity={classroom.capacity}
              onClick={() => handleClassroomClick(classroom)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeContent;
