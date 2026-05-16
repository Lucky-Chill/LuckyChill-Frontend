/**
 * 승인 모달 컴포넌트
 * @description 관리자가 강의실 예약 신청 상세 정보를 확인하고 승인/반려 처리하는 모달입니다.
 */
import { useState, useEffect } from 'react';

/**
 * @param {Object}   props
 * @param {boolean}  props.open      - 모달 표시 여부
 * @param {Function} props.onClose   - 모달 닫기 핸들러
 * @param {Function} props.onApprove - 승인 버튼 핸들러 (memo 포함)
 * @param {Function} props.onReject  - 반려 버튼 핸들러 (memo 포함)
 * @param {Object}   props.detail    - 신청 상세 데이터
 * @param {string}   props.detail.requestNumber
 * @param {string}   props.detail.applicant
 * @param {string}   props.detail.room
 * @param {string}   props.detail.date
 * @param {string}   props.detail.time
 * @param {string}   props.detail.purpose
 * @param {string}   props.detail.status
 */
const ApprovalModal = ({ open, onClose, onApprove, onReject, detail }) => {
  const [memo, setMemo] = useState('');

  // ESC 키 → 모달 닫기
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!open) return null;

  const DETAIL_ROWS = [
    { label: '신청 번호', value: detail.requestNumber },
    { label: '신청자',   value: detail.applicant },
    { label: '강의실',   value: detail.room },
    { label: '신청 일자', value: detail.date },
    { label: '사용 시간', value: detail.time },
    { label: '사용 목적', value: detail.purpose },
    { label: '신청 상태', value: detail.status },
  ];

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="w-[720px] bg-white rounded-2xl p-8 shadow-xl border border-[#E5E5E5]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-10">
          <h2 className="text-[40px] font-bold text-black">신청 상세 정보</h2>
          <button
            className="text-4xl font-bold text-black cursor-pointer bg-transparent border-none leading-none"
            onClick={onClose}
            aria-label="모달 닫기"
          >
            ×
          </button>
        </div>

        {/* Detail Section */}
        <div className="flex flex-col gap-6 mb-10">
          {DETAIL_ROWS.map(({ label, value }) => (
            <div key={label} className="flex items-center gap-12">
              <span className="w-[120px] text-[#9E9E9E] font-semibold text-[24px] shrink-0">
                {label}
              </span>
              <span className="text-[24px] font-semibold text-[#757575]">{value}</span>
            </div>
          ))}
        </div>

        {/* Memo Section */}
        <div className="flex flex-col gap-4 mb-10">
          <label className="text-[24px] font-semibold text-black">메모</label>
          <textarea
            className="w-full h-[180px] border border-[#D9D9D9] rounded-xl p-6 resize-none text-[24px] outline-none focus:border-[#014F9E] transition-colors"
            placeholder="메모를 입력하세요"
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
          />
        </div>

        {/* Button Section */}
        <div className="flex justify-end gap-4">
          <button
            className="w-[140px] h-[72px] rounded-xl text-white font-bold text-[28px] bg-[#DC1B1B] hover:opacity-90 transition cursor-pointer border-none"
            onClick={() => onReject(memo)}
          >
            반려
          </button>
          <button
            className="w-[140px] h-[72px] rounded-xl text-white font-bold text-[28px] bg-[#014F9E] hover:opacity-90 transition cursor-pointer border-none"
            onClick={() => onApprove(memo)}
          >
            승인
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApprovalModal;
