import React from "react";
import "./adminpage.css";

function AdminPage() {
  const reservations = [
    {
      room: "강의실 603",
      user: "student5@gachon.ac.kr",
      date: "2026년 05월 22일",
      floor: "6층",
      time: "16:00 - 18:00 (3시간)",
      status: "승인 대기",
      statusClass: "wait-badge",
    },
    {
      room: "강의실 507",
      user: "student4@gachon.ac.kr",
      date: "2026년 05월 21일",
      floor: "5층",
      time: "10:00 - 11:00 (1시간)",
      status: "승인 완료",
      statusClass: "complete-badge",
    },
  ];

  return (
    <div className="admin-wrap">
      <header className="admin-header">
        <h1>컴퓨터공학과 게시판</h1>

        <div className="search-box">
          <span>⌕</span>
          <input placeholder="전체 게시판의 글을 검색하세요." />
        </div>

        <div className="header-icons">
          <span>🔔</span>
          <span>♡</span>
        </div>
      </header>

      <main className="admin-main">
        <h2>관리자 페이지</h2>

        <section className="summary-area">
          <div className="summary-card">
            <p>전체 신청</p>
            <strong>8</strong>
            <span className="circle blue">▣</span>
          </div>

          <div className="summary-card">
            <p>승인 대기</p>
            <strong className="red">6</strong>
            <span className="circle yellow">◷</span>
          </div>

          <div className="summary-card">
            <p>승인 완료</p>
            <strong className="green">2</strong>
            <span className="circle green-bg">✓</span>
          </div>
        </section>

        <section className="tab-box">
          <button className="active">전체</button>
          <button>승인 대기 (6)</button>
          <button>승인 완료 (2)</button>
        </section>

        <section className="reservation-list">
          {reservations.map((item, index) => (
            <article className="reservation-card" key={index}>
              <div className="reservation-left">
                <h3>{item.room}</h3>

                <div className="reservation-info">
                  <p>♙ 신청자:<br />{item.user}</p>
                  <p>▣ {item.date}</p>
                  <p>⌖ {item.floor}</p>
                  <p>◷ {item.time}</p>
                </div>
              </div>

              <span className={item.statusClass}>{item.status}</span>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}

export default AdminPage;