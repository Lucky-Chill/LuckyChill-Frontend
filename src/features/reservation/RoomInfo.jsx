/**
 * 강의실 정보 표시 컴포넌트
 * @description 위치, 수용 인원, 장비 등의 강의실 기본 정보를 렌더링합니다.
 * @param {Object} props
 * @param {Object} props.room - 강의실 정보 객체
 * @param {string} props.room.location - 위치
 * @param {number} props.room.capacity - 수용 인원
 * @param {string} props.room.equipment - 장비 목록
 */
const RoomInfo = ({ room }) => {
  return (
    <div className="mx-6 my-4 p-4 bg-[#fafafa] rounded-lg border border-[#f0f0f0]">
      <div className="text-[13px] font-bold text-[#111] mb-2.5">강의실 정보</div>
      <div className="flex justify-between text-xs text-[#555] mb-1.5">
        <span>위치: {room.location}</span>
        <span>수용 인원: {room.capacity}명</span>
      </div>
      <div className="text-xs text-[#555]">
        <span>장비: {room.equipment}</span>
      </div>
    </div>
  );
};

export default RoomInfo;
