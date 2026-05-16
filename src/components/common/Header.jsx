/**
 * 공통 헤더 컴포넌트
 * @description 학과명(로고), 알림 아이콘(뱃지 포함), 프로필 아이콘을 포함하는 상단 헤더입니다.
 */
const Header = () => {
  return (
    <header className="h-14 flex justify-between items-center px-5 border-b border-[#e0e0e0] bg-white shrink-0">
      <div className="text-base font-bold text-[#2563EB]">컴퓨터공학과</div>
      <div className="flex gap-3 items-center">
        <button className="relative p-1 text-[#555] text-lg bg-transparent border-none cursor-pointer" aria-label="알림">
          🔔
          <span className="absolute top-0.5 right-0.5 w-[7px] h-[7px] bg-red-500 rounded-full" />
        </button>
        <button className="p-1 text-[#555] text-lg bg-transparent border-none cursor-pointer" aria-label="프로필">
          👤
        </button>
      </div>
    </header>
  );
};

export default Header;
