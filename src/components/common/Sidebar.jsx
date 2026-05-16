/**
 * 공통 사이드바 컴포넌트
 * @description 좌측 네비게이션 메뉴를 제공합니다.
 */
const Sidebar = () => {
  return (
    <aside className="w-[200px] shrink-0 px-3 py-4 border-r border-[#e0e0e0] bg-[#fafafa]">
      <button className="block w-full text-left px-3 py-2.5 border-none rounded-lg text-sm font-semibold text-[#2563EB] bg-[#EFF6FF] cursor-pointer transition-colors duration-150">
        강의실 예약
      </button>
    </aside>
  );
};

export default Sidebar;