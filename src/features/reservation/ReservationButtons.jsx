/**
 * 예약 액션 버튼 컴포넌트
 * @description 예약하기(flex:1) 및 취소(고정 너비) 버튼을 렌더링합니다.
 *              예약 가능 여부에 따라 예약하기 버튼의 스타일이 변경됩니다.
 * @param {Object} props
 * @param {boolean} props.canReserve - 예약 가능 여부 (날짜 + 시작/종료 시간 모두 선택 시 true)
 * @param {() => void} props.onCancel - 취소 버튼 클릭 콜백
 * @param {() => void} props.onReserve - 예약하기 버튼 클릭 콜백
 */
const ReservationButtons = ({ canReserve, onCancel, onReserve }) => {
  return (
    <div className='flex gap-3 px-8 pt-6 pb-8'>
      <button
        onClick={onReserve}
        disabled={!canReserve}
        className={`h-11 flex-1 rounded-lg border-none text-sm font-semibold transition-all duration-200 ${
          canReserve
            ? 'bg-[#1D4ED8] text-white cursor-pointer hover:bg-[#1E40AF]'
            : 'bg-[#D1D5DB] text-[#9CA3AF] cursor-not-allowed'
        }`}
      >
        예약하기
      </button>
      <button
        onClick={onCancel}
        className='h-11 w-28 cursor-pointer rounded-lg border border-[#D1D5DB] bg-white text-sm font-medium text-[#555] transition-colors duration-150 hover:bg-[#f5f5f5]'
      >
        취소
      </button>
    </div>
  );
};

export default ReservationButtons;
