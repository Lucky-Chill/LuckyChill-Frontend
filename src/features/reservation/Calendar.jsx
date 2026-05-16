/**
 * 날짜 선택 캘린더 컴포넌트
 * @description 현재 월 기준 날짜 그리드를 렌더링합니다.
 *              날짜 상태(available/today/selected/reserved/disabled)를 시각적으로 표시합니다.
 */
import { useState } from 'react';

const WEEK_DAYS = [
  { label: '일', color: 'text-mudang-red' },
  { label: '월', color: 'text-text-muted' },
  { label: '화', color: 'text-text-muted' },
  { label: '수', color: 'text-text-muted' },
  { label: '목', color: 'text-text-muted' },
  { label: '금', color: 'text-text-muted' },
  { label: '토', color: 'text-gachon-blue' },
];

/**
 * @param {Object} props
 * @param {number[]} props.disabledDates - 예약 불가 날짜 배열
 * @param {number[]} props.reservedDates - 이미 예약된 날짜 배열
 * @param {string|null} props.selectedDateStr - 현재 선택된 날짜 문자열
 * @param {(date: number, year: number, month: number) => void} props.onDateSelect - 날짜 선택 콜백 (month은 1-based)
 * @param {(year: number, month: number) => void} [props.onMonthChange] - 월 변경 콜백 (month은 1-based)
 */
const Calendar = ({
  disabledDates,
  reservedDates,
  selectedDateStr,
  onDateSelect,
  onMonthChange,
}) => {
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

  /**
   * 날짜를 YYYY-MM-DD 문자열로 변환합니다.
   * @param {number} date
   * @returns {string}
   */
  const formatDateString = (date) =>
    `${viewYear}-${String(viewMonth + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;

  const handlePrevMonth = () => {
    const newYear = viewMonth === 0 ? viewYear - 1 : viewYear;
    const newMonth = viewMonth === 0 ? 11 : viewMonth - 1;
    setViewYear(newYear);
    setViewMonth(newMonth);
    onMonthChange?.(newYear, newMonth + 1);
  };

  const handleNextMonth = () => {
    const newYear = viewMonth === 11 ? viewYear + 1 : viewYear;
    const newMonth = viewMonth === 11 ? 0 : viewMonth + 1;
    setViewYear(newYear);
    setViewMonth(newMonth);
    onMonthChange?.(newYear, newMonth + 1);
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
      'h-10 flex items-center justify-center text-sm font-medium border-none cursor-pointer mx-auto transition-all duration-150 ';
    if (disabledDates.includes(date)) {
      return base + 'w-[96px] rounded-lg text-disabled-gray cursor-not-allowed bg-transparent';
    }
    if (reservedDates.includes(date)) {
      return base + 'w-[96px] rounded-lg bg-disabled-gray text-white cursor-not-allowed';
    }
    if (selectedDateStr === formatDateString(date)) {
      return base + 'w-10 rounded-full bg-gachon-blue text-white font-bold';
    }
    if (isToday(date)) {
      return (
        base +
        'w-[96px] rounded-lg border-2 border-gachon-orange text-text-primary font-bold bg-transparent hover:bg-gachon-light-blue'
      );
    }
    return base + 'w-[96px] rounded-lg text-text-primary bg-transparent hover:bg-gachon-light-blue';
  };

  return (
    <div>
      <div className='mb-8 flex items-center gap-2 text-base font-bold text-text-primary'>
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
          className='cursor-pointer rounded-lg border-none bg-transparent px-2 py-1 text-base text-text-secondary transition-colors hover:bg-border-muted'
        >
          ‹
        </button>
        <div className='min-w-[120px] text-center text-base font-bold text-text-primary'>
          {viewYear}년 {viewMonth + 1}월
        </div>
        <button
          onClick={handleNextMonth}
          className='cursor-pointer rounded-lg border-none bg-transparent px-2 py-1 text-base text-text-secondary transition-colors hover:bg-border-muted'
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
              onClick={() => onDateSelect(date, viewYear, viewMonth + 1)}
            >
              {date}
            </button>
          ),
        )}
      </div>

      <div className='mt-8 flex items-center gap-6 text-sm text-text-secondary'>
        <div className='flex items-center gap-2'>
          <div className='size-4 rounded-lg bg-disabled-gray' />
          <span>예약불가</span>
        </div>
        <div className='flex items-center gap-2'>
          <div className='size-4 rounded-lg bg-gachon-orange' />
          <span>오늘</span>
        </div>
        <div className='flex items-center gap-2'>
          <div className='size-4 rounded-lg bg-gachon-blue' />
          <span>선택</span>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
