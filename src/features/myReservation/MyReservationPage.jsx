/**
 * 나의 예약 현황 피처 컴포넌트
 * @description 로그인 유저의 이메일과 예약 목록을 조회하여 렌더링합니다.
 *              예약이 없을 경우 Empty State를 표시합니다.
 */
import { useEffect, useState } from 'react';
import { getMe } from '../../apis/userApi';
import { getMyReservations } from '../../apis/reservationApi';

/** 예약 상태 한글 라벨 */
const STATUS_LABEL = {
  PENDING: '승인 대기',
  APPROVED: '승인 완료',
  REJECTED: '반려',
  CANCELLED: '취소',
};

/** 예약 상태별 배지 스타일 */
const STATUS_CLASS = {
  PENDING: 'bg-amber-100 text-amber-700',
  APPROVED: 'bg-green-100 text-green-700',
  REJECTED: 'bg-red-100 text-red-700',
  CANCELLED: 'bg-gray-100 text-gray-500',
};

/**
 * 날짜·시간을 읽기 쉬운 형식으로 포맷
 * @param {string} date - "YYYY-MM-DD"
 * @param {string} start - "HH:mm"
 * @param {string} end   - "HH:mm"
 * @returns {string}
 */
const formatDateTime = (date, start, end) => `${date} · ${start} ~ ${end}`;

const MyReservationPage = () => {
  const [email, setEmail] = useState('');
  const [reservations, setReservations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([getMe(), getMyReservations()])
      .then(([meRes, listRes]) => {
        setEmail(meRes.data.email);
        setReservations(listRes.data);
      })
      .catch(() => setError('데이터를 불러오는 데 실패했습니다.'))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className='mx-auto w-full max-w-[860px] py-10'>
      {/* 페이지 제목 */}
      <h1 className='mb-8 border-b border-[#f0f0f0] pb-5 text-xl font-bold text-[#1E293B]'>
        나의 예약 현황
      </h1>

      {/* 예약자 정보 카드 */}
      <div className='mb-8 rounded-xl bg-[#EFF6FF] px-6 py-5'>
        <p className='mb-1 text-xs font-semibold text-[#1D4ED8]'>예약자 정보</p>
        <p className='text-sm font-medium text-[#1E293B]'>{email || '-'}</p>
      </div>

      {/* 예약 목록 영역 */}
      {isLoading && (
        <div className='flex items-center justify-center py-20'>
          <div className='h-8 w-8 animate-spin rounded-full border-4 border-[#1D4ED8] border-t-transparent' />
        </div>
      )}

      {!isLoading && error && (
        <div className='flex items-center justify-center py-20 text-sm text-red-500'>
          {error}
        </div>
      )}

      {!isLoading && !error && reservations.length === 0 && <EmptyState />}

      {!isLoading && !error && reservations.length > 0 && (
        <ul className='flex flex-col gap-4'>
          {reservations.map((item) => (
            <ReservationCard key={item.id} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
};

/* ── 예약 카드 ─────────────────────────────────────────── */

/**
 * 개별 예약 정보 카드
 * @param {Object} props
 * @param {Object} props.item - 예약 데이터 ({ id, classroomName, reservationDate, startTime, endTime, title, status })
 */
const ReservationCard = ({ item }) => (
  <li className='flex items-center justify-between rounded-xl border border-[#f0f0f0] bg-white px-6 py-5 shadow-[0_1px_4px_rgba(0,0,0,0.06)]'>
    <div className='flex flex-col gap-1'>
      <span className='text-base font-bold text-[#1E293B]'>{item.classroomName}</span>
      <span className='text-sm text-[#1E293B]'>{item.title}</span>
      <span className='text-xs text-[#94A3B8]'>
        {formatDateTime(item.reservationDate, item.startTime, item.endTime)}
      </span>
    </div>
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${STATUS_CLASS[item.status] ?? 'bg-gray-100 text-gray-500'}`}
    >
      {STATUS_LABEL[item.status] ?? item.status}
    </span>
  </li>
);

/* ── Empty State ───────────────────────────────────────── */

const EmptyState = () => (
  <div className='flex flex-col items-center justify-center py-24 gap-4'>
    <svg
      width='56'
      height='56'
      fill='none'
      viewBox='0 0 24 24'
      stroke='#CBD5E1'
      strokeWidth='1.5'
    >
      <rect x='3' y='4' width='18' height='18' rx='2' />
      <line x1='16' y1='2' x2='16' y2='6' />
      <line x1='8' y1='2' x2='8' y2='6' />
      <line x1='3' y1='10' x2='21' y2='10' />
    </svg>
    <p className='text-lg font-semibold text-[#1E293B]'>예약 내역이 없습니다.</p>
    <p className='text-sm text-[#94A3B8]'>강의실을 예약해보세요!</p>
  </div>
);

export default MyReservationPage;
