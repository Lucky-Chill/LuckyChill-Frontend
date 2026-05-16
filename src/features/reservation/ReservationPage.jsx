/**
 * 강의실 예약 기능의 메인 컴포넌트
 * @description 예약 UI 컴포넌트를 조합합니다.
 *              화면 1 → 화면 2 흐름: 날짜·시간 선택 후 ReservationFormModal로 예약 정보 전달.
 */
import Calendar from './Calendar';
import TimeSelector from './TimeSelector';
import RoomInfo from './RoomInfo';
import ReservationButtons from './ReservationButtons';
import ReservationFormModal from '../../components/ReservationFormModal';
import useReservationPage from './hooks/useReservationPage';

/**
 * 강의실 예약 페이지 컴포넌트
 * @description 날짜·시간 선택 상태를 통합 관리하며, 예약 가능 여부를 판단합니다.
 */
const ReservationPage = () => {
  const {
    roomName,
    room,
    unavailableDates,
    reservedTimes,
    selectedDateStr,
    startTime,
    endTime,
    canReserve,
    isModalOpen,
    reservationData,
    handleMonthChange,
    handleDateSelect,
    handleTimeSelect,
    handleCancel,
    openReservationModal,
    closeReservationModal,
  } = useReservationPage();

  return (
    <div className='w-full pt-12 pb-16'>
      {/* Room Header */}
      <h1 className='m-0 text-2xl leading-8 font-bold tracking-normal text-text-primary'>
        {roomName} 예약
      </h1>

      {/* Room Image */}
      <div className='mt-10 flex h-[360px] items-center justify-center overflow-hidden rounded-lg bg-white text-sm text-text-muted'>
        강의실 이미지
      </div>

      {/* Room Info */}
      <RoomInfo room={room} />

      {/* Calendar Section */}
      <div className='mt-8 rounded-lg bg-white px-8 py-8'>
        <Calendar
          disabledDates={unavailableDates}
          reservedDates={[]}
          selectedDateStr={selectedDateStr}
          onDateSelect={handleDateSelect}
          onMonthChange={handleMonthChange}
        />
      </div>

      {/* Divider */}
      <div className='h-px bg-border-muted' />

      {/* Time Section */}
      <div className='rounded-lg bg-white px-8 py-8'>
        <TimeSelector
          reservedTimes={reservedTimes}
          startTime={startTime}
          endTime={endTime}
          onTimeSelect={handleTimeSelect}
        />
      </div>

      {/* Buttons */}
      <ReservationButtons
        canReserve={canReserve}
        onCancel={handleCancel}
        onReserve={openReservationModal}
      />

      {/* 화면 2: 예약 신청서 모달 — 화면 1에서 선택한 정보 전달 */}
      {isModalOpen && (
        <ReservationFormModal onClose={closeReservationModal} reservationData={reservationData} />
      )}
    </div>
  );
};

export default ReservationPage;
