/**
 * 강의실 예약 기능의 메인 컴포넌트
 * @description 예약 상태(날짜, 시간)를 관리하고 하위 컴포넌트를 조합합니다.
 *              HTML 원본 디자인(max-width 860px, 섹션별 padding)을 기준으로 레이아웃됩니다.
 */
import { useState } from 'react';
import Calendar from './Calendar';
import TimeSelector from './TimeSelector';
import RoomInfo from './RoomInfo';
import ReservationButtons from './ReservationButtons';
import ReservationFormModal from '../../components/ReservationFormModal';

const TIME_SLOTS = [
  '09',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
];

const ROOM_DATA = {
  name: '강의실 201',
  location: '2층',
  capacity: 30,
  equipment: '빔프로젝터, 화이트보드',
  disabledDates: [13],
  reservedDates: [16],
  reservedTimes: [],
};

/**
 * 강의실 예약 페이지 컴포넌트
 * @description 날짜·시간 선택 상태를 통합 관리하며, 예약 가능 여부를 판단합니다.
 */
const ReservationPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  /**
   * 날짜 선택 핸들러 — 날짜 변경 시 시간 선택 초기화
   * @param {number} date - 선택된 날짜
   */
  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setStartTime(null);
    setEndTime(null);
  };

  /**
   * 시간 슬롯 선택 핸들러
   * startTime+endTime 모두 있거나 startTime만 없을 때 → 새 startTime 설정
   * startTime만 있을 때 → endTime 설정 (예약불가 범위 포함 시 alert)
   * @param {string} time - 선택된 시간 슬롯 ("09" ~ "22")
   */
  const handleTimeSelect = (time) => {
    if (!startTime || (startTime && endTime)) {
      setStartTime(time);
      setEndTime(null);
      return;
    }

    const s = parseInt(startTime);
    const e = parseInt(time);

    if (e < s) {
      setStartTime(time);
      setEndTime(null);
      return;
    }

    const blocked = TIME_SLOTS.filter((ts) => {
      const n = parseInt(ts);
      return n >= s && n <= e && ROOM_DATA.reservedTimes.includes(ts);
    });

    if (blocked.length > 0) {
      alert('선택 범위에 예약 불가 시간이 포함되어 있습니다.');
      return;
    }

    setEndTime(time);
  };

  const handleCancel = () => {
    setSelectedDate(null);
    setStartTime(null);
    setEndTime(null);
  };

  const handleReserve = () => {
    setIsModalOpen(true);
  };

  const canReserve = selectedDate !== null && startTime !== null && endTime !== null;

  return (
    <div className='w-full pt-12 pb-16'>
      {/* Room Header */}
      <h1 className='m-0 text-base leading-6 font-bold tracking-normal text-[#111827]'>
        {ROOM_DATA.name} 예약
      </h1>

      {/* Room Image */}
      <div className='mt-10 flex h-[360px] items-center justify-center overflow-hidden rounded-lg bg-white text-sm text-[#bbb]'>
        강의실 이미지
      </div>

      {/* Room Info */}
      <RoomInfo room={ROOM_DATA} />

      {/* Calendar Section */}
      <div className='mt-8 rounded-lg bg-white px-8 py-8'>
        <Calendar
          disabledDates={ROOM_DATA.disabledDates}
          reservedDates={ROOM_DATA.reservedDates}
          selectedDate={selectedDate}
          onDateSelect={handleDateSelect}
        />
      </div>

      {/* Divider */}
      <div className='h-px bg-[#f0f0f0]' />

      {/* Time Section */}
      <div className='rounded-lg bg-white px-8 py-8'>
        <TimeSelector
          reservedTimes={ROOM_DATA.reservedTimes}
          startTime={startTime}
          endTime={endTime}
          onTimeSelect={handleTimeSelect}
        />
      </div>

      {/* Buttons */}
      <ReservationButtons
        canReserve={canReserve}
        onCancel={handleCancel}
        onReserve={handleReserve}
      />

      {isModalOpen && <ReservationFormModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default ReservationPage;
