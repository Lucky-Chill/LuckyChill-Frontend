/**
 * 메인 레이아웃 컴포넌트
 * @description Header + Sidebar + Content 영역으로 구성된 공통 레이아웃입니다.
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content 영역에 렌더링할 자식 컴포넌트
 */
import Header from '../components/common/Header';
import Sidebar from '../components/common/Sidebar';

const MainLayout = ({ children }) => {
  return (
    <div className="w-full h-screen flex flex-col bg-[#f0f0f0]">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        {/* p-5를 main이 아닌 children 바깥으로 — 스크롤 영역 안에서 padding 적용 */}
        <main className="flex-1 overflow-y-auto bg-[#f0f0f0]">
          <div className="p-5">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
