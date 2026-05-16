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
    <div className="flex gap-2.5 px-6 pt-4 pb-5 border-t border-[#f0f0f0]">
      <button
        onClick={onReserve}
        disabled={!canReserve}
        className={`flex-1 h-11 border-none rounded-lg text-sm font-semibold transition-all duration-200 ${
          canReserve
            ? 'bg-[#1D4ED8] text-white cursor-pointer hover:bg-[#1E40AF]'
            : 'bg-[#D1D5DB] text-[#9CA3AF] cursor-not-allowed'
        }`}
      >
        예약하기
      </button>
      <button
        onClick={onCancel}
        className="w-20 h-11 bg-white text-[#555] border border-[#D1D5DB] rounded-lg text-sm font-medium cursor-pointer hover:bg-[#f5f5f5] transition-colors duration-150"
      >
        취소
      </button>
    </div>
  );
};

export default ReservationButtons;
