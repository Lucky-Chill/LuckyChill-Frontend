import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ClassroomCard from './ClassroomCard';
import FloorTabs from './FloorTabs';

const CLASSROOMS_BY_FLOOR = {
  '3F': Array.from({ length: 10 }, (_, index) => {
    const roomNumber = 301 + index;
    return { id: `3f-${roomNumber}`, roomName: `강의실 ${roomNumber}`, capacity: 30 };
  }),
  '4F': Array.from({ length: 10 }, (_, index) => {
    const roomNumber = 401 + index;
    return { id: `4f-${roomNumber}`, roomName: `강의실 ${roomNumber}`, capacity: 30 };
  }),
  '5F': Array.from({ length: 10 }, (_, index) => {
    const roomNumber = 501 + index;
    return { id: `5f-${roomNumber}`, roomName: `강의실 ${roomNumber}`, capacity: 30 };
  }),
};

function HomeContent() {
  const navigate = useNavigate();
  const [activeFloor, setActiveFloor] = useState('3F');
  const classrooms = CLASSROOMS_BY_FLOOR[activeFloor];

  const handleClassroomClick = () => {
    navigate('/reservation');
  };

  return (
    <section className='pt-12 pb-16'>
      <h1 className='m-0 text-base leading-6 font-bold tracking-normal text-[#111827]'>
        강의실 예약
      </h1>

      <div className='mt-14'>
        <FloorTabs activeFloor={activeFloor} onFloorChange={setActiveFloor} />
      </div>

      <div className='mt-7 min-h-[536px] pt-10'>
        <div className='grid grid-cols-[repeat(5,200px)] justify-between gap-y-10'>
          {classrooms.map((classroom) => (
            <ClassroomCard
              key={classroom.id}
              roomName={classroom.roomName}
              capacity={classroom.capacity}
              onClick={handleClassroomClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeContent;
