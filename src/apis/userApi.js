/**
 * 사용자 관련 API 함수
 * @description GET /api/users/me, POST /api/auth/logout
 * ⚠️ API 경로는 백엔드 팀과 확인 후 확정 필요
 */
import httpClient from '../libs/http/httpClient';

/**
 * 로그인한 유저 정보 조회
 * @returns {Promise<{ success: boolean, data: { email: string } }>}
 */
export const getMe = () => httpClient('/api/users/me');

/**
 * 로그아웃 — 서버 토큰 무효화
 * @returns {Promise<{ success: boolean }>}
 */
export const logout = () => httpClient('/api/auth/logout', { method: 'POST' });
