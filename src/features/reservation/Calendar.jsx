/**
 * 날짜 선택 캘린더 컴포넌트
 * @description 현재 월 기준 날짜 그리드를 렌더링합니다.
 *              날짜 상태(available/today/selected/reserved/disabled)를 시각적으로 표시합니다.
 */
import { useState } from 'react';

const WEEK_DAYS = [
  { label: '일', color: 'text-[#EF4444]' },
  { label: '월', color: 'text-[#999]' },
  { label: '화', color: 'text-[#999]' },
  { label: '수', color: 'text-[#999]' },
  { label: '목', color: 'text-[#999]' },
  { label: '금', color: 'text-[#999]' },
  { label: '토', color: 'text-[#3B82F6]' },
];

/**
 * @param {Object} props
 * @param {number[]} props.disabledDates - 예약 불가 날짜 배열
 * @param {number[]} props.reservedDates - 이미 예약된 날짜 배열
 * @param {number|null} props.selectedDate - 현재 선택된 날짜
 * @param {(date: number) => void} props.onDateSelect - 날짜 선택 콜백
 */
const Calendar = ({ disabledDates, reservedDates, selectedDate, onDateSelect }) => {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  const firstDay = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  /**
   * 해당 날짜가 오늘인지 확인
   * @param {number} date
   * @returns {boolean}
   */
  const isToday = (date) =>
    today.getFullYear() === viewYear && today.getMonth() === viewMonth && today.getDate() === date;

  const handlePrevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  };

  const cells = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  /**
   * 날짜 버튼의 스타일 클래스를 반환 — disabled > reserved > selected > today > default 순
   * @param {number} date
   * @returns {string}
   */
  const getDateClass = (date) => {
    const base =
      'w-[96px] h-10 flex items-center justify-center text-sm font-medium border-none rounded-lg cursor-pointer mx-auto transition-all duration-150 ';
    if (disabledDates.includes(date)) {
      return base + 'text-[#ccc] cursor-not-allowed bg-transparent';
    }
    if (reservedDates.includes(date)) {
      return base + 'bg-[#6B7280] text-white cursor-not-allowed';
    }
    if (selectedDate === date) {
      return base + 'bg-[#1D4ED8] text-white font-bold';
    }
    if (isToday(date)) {
      return (
        base + 'border-2 border-[#F59E0B] text-[#333] font-bold bg-transparent hover:bg-[#DBEAFE]'
      );
    }
    return base + 'text-[#333] bg-transparent hover:bg-[#DBEAFE]';
  };

  return (
    <div>
      <div className='mb-8 flex items-center gap-2 text-base font-bold text-[#111]'>
        <svg
          width='20'
          height='20'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          viewBox='0 0 24 24'
        >
          <rect x='3' y='4' width='18' height='18' rx='2' />
          <line x1='16' y1='2' x2='16' y2='6' />
          <line x1='8' y1='2' x2='8' y2='6' />
          <line x1='3' y1='10' x2='21' y2='10' />
        </svg>
        날짜 선택
      </div>

      <div className='mb-9 flex items-center justify-center gap-4'>
        <button
          onClick={handlePrevMonth}
          className='cursor-pointer rounded-lg border-none bg-transparent px-2 py-1 text-base text-[#555] transition-colors hover:bg-[#f0f0f0]'
        >
          ‹
        </button>
        <div className='min-w-[120px] text-center text-base font-bold text-[#111]'>
          {viewYear}년 {viewMonth + 1}월
        </div>
        <button
          onClick={handleNextMonth}
          className='cursor-pointer rounded-lg border-none bg-transparent px-2 py-1 text-base text-[#555] transition-colors hover:bg-[#f0f0f0]'
        >
          ›
        </button>
      </div>

      <div className='grid grid-cols-7 gap-y-6'>
        {WEEK_DAYS.map((day) => (
          <div key={day.label} className={`pb-2 text-center text-sm font-semibold ${day.color}`}>
            {day.label}
          </div>
        ))}
        {cells.map((date, idx) =>
          date === null ? (
            <div key={`empty-${idx}`} />
          ) : (
            <button
              key={date}
              className={getDateClass(date)}
              disabled={disabledDates.includes(date) || reservedDates.includes(date)}
              onClick={() => onDateSelect(date)}
            >
              {date}
            </button>
          ),
        )}
      </div>

      <div className='mt-8 flex items-center gap-6 text-sm text-[#555]'>
        <div className='flex items-center gap-2'>
          <div className='size-4 rounded-lg bg-[#6B7280]' />
          <span>예약불가</span>
        </div>
        <div className='flex items-center gap-2'>
          <div className='size-4 rounded-lg bg-[#F59E0B]' />
          <span>오늘</span>
        </div>
        <div className='flex items-center gap-2'>
          <div className='size-4 rounded-lg bg-[#1D4ED8]' />
          <span>선택</span>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
