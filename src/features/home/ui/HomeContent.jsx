import { useState } from 'react';
import ClassroomCard from './ClassroomCard';
import FloorTabs from './FloorTabs';

const CLASSROOMS_BY_FLOOR = {
  '3F': [
    { id: '3f-201-a', roomName: '강의실 201', capacity: 30 },
    { id: '3f-201-b', roomName: '강의실 201', capacity: 30 },
    { id: '3f-201-c', roomName: '강의실 201', capacity: 30 },
    { id: '3f-201-d', roomName: '강의실 201', capacity: 30 },
    { id: '3f-201-e', roomName: '강의실 201', capacity: 30 },
    { id: '3f-201-f', roomName: '강의실 201', capacity: 30 },
    { id: '3f-205', roomName: '강의실 205', capacity: 30 },
    { id: '3f-203', roomName: '강의실 203', capacity: 30 },
    { id: '3f-204', roomName: '강의실 204', capacity: 30 },
  ],
  '4F': [
    { id: '4f-401', roomName: '강의실 401', capacity: 30 },
    { id: '4f-402', roomName: '강의실 402', capacity: 30 },
    { id: '4f-403', roomName: '강의실 403', capacity: 30 },
  ],
  '5F': [
    { id: '5f-501', roomName: '강의실 501', capacity: 30 },
    { id: '5f-502', roomName: '강의실 502', capacity: 30 },
    { id: '5f-503', roomName: '강의실 503', capacity: 30 },
  ],
};

function HomeContent() {
  const [activeFloor, setActiveFloor] = useState('3F');
  const classrooms = CLASSROOMS_BY_FLOOR[activeFloor];

  return (
    <section className='pt-12 pb-16'>
      <h1 className='m-0 text-base leading-6 font-bold tracking-normal text-[#111827]'>
        강의실 예약
      </h1>

      <div className='mt-14'>
        <FloorTabs activeFloor={activeFloor} onFloorChange={setActiveFloor} />
      </div>

      <div className='mt-7 min-h-[536px] border-t border-[#e5e7eb] pt-10'>
        <div className='grid grid-cols-[repeat(5,200px)] justify-between gap-y-10'>
          {classrooms.map((classroom) => (
            <ClassroomCard
              key={classroom.id}
              roomName={classroom.roomName}
              capacity={classroom.capacity}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeContent;
