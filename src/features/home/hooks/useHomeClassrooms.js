import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CLASSROOMS_BY_FLOOR } from '../../classroom/constants/classrooms';

/**
 * 홈 화면 강의실 목록 상태와 이동을 관리합니다.
 * @returns {{ activeFloor: string, classrooms: Array, setActiveFloor: Function, handleClassroomClick: Function }}
 */
const useHomeClassrooms = () => {
  const navigate = useNavigate();
  const [activeFloor, setActiveFloor] = useState('3F');
  const classrooms = CLASSROOMS_BY_FLOOR[activeFloor];

  const handleClassroomClick = (classroom) => {
    navigate(`/reservation/${classroom.id}`, { state: { classroom } });
  };

  return {
    activeFloor,
    classrooms,
    setActiveFloor,
    handleClassroomClick,
  };
};

export default useHomeClassrooms;
