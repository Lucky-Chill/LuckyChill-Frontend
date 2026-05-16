import { useEffect, useState } from 'react';
import { getMyReservations } from '../../../apis/reservationApi';
import { getMe } from '../../../apis/userApi';

/**
 * 로그인 유저의 이메일과 예약 목록 조회 상태를 관리합니다.
 * @returns {{ email: string, reservations: Array, isLoading: boolean, error: string|null }}
 */
const useMyReservations = () => {
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

  return {
    email,
    reservations,
    isLoading,
    error,
  };
};

export default useMyReservations;
