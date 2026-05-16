/**
 * 공통 HTTP 클라이언트
 * @description fetch 기반 래퍼. 응답이 ok가 아니면 에러를 throw합니다.
 */

const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '';

/**
 * @param {string} endpoint - API 경로 (예: /api/classrooms/123)
 * @param {RequestInit} [options] - fetch 옵션
 * @returns {Promise<any>} - 파싱된 JSON 응답
 */
const httpClient = async (endpoint, options = {}) => {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }

  return response.json();
};

export default httpClient;
