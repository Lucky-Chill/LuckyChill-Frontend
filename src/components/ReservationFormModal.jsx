import { useState } from "react";
import "./ReservationFormModal.css";
import { createReservation } from "../apis/reservationApi";

/**
 * 예약 신청서 모달 (화면 2)
 * @param {Object} props
 * @param {() => void} props.onClose - 모달 닫기 콜백
 * @param {Object} props.reservationData - 화면 1에서 전달된 예약 기본 정보
 * @param {string} props.reservationData.classroomId
 * @param {string} props.reservationData.reservationDate - "YYYY-MM-DD"
 * @param {string} props.reservationData.startTime - "HH:mm"
 * @param {string} props.reservationData.endTime   - "HH:mm"
 */
function ReservationFormModal({ onClose, reservationData }) {
  const [form, setForm] = useState({
    title: "",
    participantInfo: "",
    eventTypeClass: false,
    eventTypeSelfStudy: false,
    eventTypeStudyGroup: false,
    eventTypeEtc: false,
    eventTypeEtcText: "",
    useProjector: false,
    useComputer: false,
    useExtraEquipment: false,
    extraEquipment: "",
    reason: "",
    applicantName: "",
    applicantDepartment: "",
    applicantStudentId: "",
    applicantPhone: "",
    professorName: "",
    professorPhone: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const getEventType = () => {
    if (form.eventTypeClass) return "CLASS";
    if (form.eventTypeSelfStudy) return "SELF_STUDY";
    if (form.eventTypeStudyGroup) return "STUDY_GROUP";
    if (form.eventTypeEtc) return "ETC";
    return null;
  };

  const handleSubmit = async () => {
    const body = {
      ...reservationData,
      title: form.title,
      participantInfo: form.participantInfo,
      eventType: getEventType(),
      eventTypeEtc: form.eventTypeEtc ? form.eventTypeEtcText : null,
      useProjector: form.useProjector,
      useComputer: form.useComputer,
      extraEquipment: form.useExtraEquipment ? form.extraEquipment : "",
      reason: form.reason,
      applicantName: form.applicantName,
      applicantDepartment: form.applicantDepartment,
      applicantStudentId: form.applicantStudentId,
      applicantPhone: form.applicantPhone,
      professorName: form.professorName,
      professorPhone: form.professorPhone,
    };

    try {
      await createReservation(body);
      alert("예약 신청이 완료되었습니다.");
      onClose();
    } catch (err) {
      console.error("예약 신청 실패:", err);
      alert("예약 신청 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="modal-bg">
      <div className="reservation-modal">
        <div className="modal-header">
          <h2>예약 사유 제출</h2>
          <button type="button" onClick={onClose} className="close-btn">
            ×
          </button>
        </div>

        <div className="modal-body">
          <label className="field-label">
            행사명<span>*</span>
          </label>
          <input
            name="title"
            placeholder="제목을 입력하세요"
            value={form.title}
            onChange={handleChange}
          />

          <label className="field-label">
            참여대상/인원<span>*</span>
          </label>
          <input
            name="participantInfo"
            placeholder="교수 외 인원"
            value={form.participantInfo}
            onChange={handleChange}
          />

          <label className="field-label">
            행사종류<span>*</span>
          </label>
          <div className="checkbox-row">
            <label>
              <input
                type="checkbox"
                name="eventTypeClass"
                checked={form.eventTypeClass}
                onChange={handleChange}
              />
              수업
            </label>

            <label>
              <input
                type="checkbox"
                name="eventTypeSelfStudy"
                checked={form.eventTypeSelfStudy}
                onChange={handleChange}
              />
              자습
            </label>

            <label>
              <input
                type="checkbox"
                name="eventTypeStudyGroup"
                checked={form.eventTypeStudyGroup}
                onChange={handleChange}
              />
              스터디 그룹
            </label>
          </div>

          <div className="checkbox-row single">
            <label>
              <input
                type="checkbox"
                name="eventTypeEtc"
                checked={form.eventTypeEtc}
                onChange={handleChange}
              />
              기타
            </label>
          </div>

          <textarea
            name="eventTypeEtcText"
            placeholder="내용을 입력하세요"
            value={form.eventTypeEtcText}
            onChange={handleChange}
          />

          <label className="section-label">기자재 사용 여부</label>
          <div className="checkbox-row">
            <label>
              <input
                type="checkbox"
                name="useProjector"
                checked={form.useProjector}
                onChange={handleChange}
              />
              빔 프로젝터 사용 여부
            </label>

            <label>
              <input
                type="checkbox"
                name="useComputer"
                checked={form.useComputer}
                onChange={handleChange}
              />
              전자교탁 컴퓨터 사용 여부
            </label>
          </div>

          <div className="checkbox-row single">
            <label>
              <input
                type="checkbox"
                name="useExtraEquipment"
                checked={form.useExtraEquipment}
                onChange={handleChange}
              />
              기타 장비
            </label>
          </div>

          <textarea
            name="extraEquipment"
            placeholder="내용을 입력하세요"
            value={form.extraEquipment}
            onChange={handleChange}
          />

          <label className="field-label">
            신청사유<span>*</span>
          </label>
          <textarea
            name="reason"
            className="reason"
            placeholder="내용을 입력하세요"
            value={form.reason}
            onChange={handleChange}
          />

          <label className="field-label">
            신청인<span>*</span>
          </label>
          <div className="input-row applicant-row">
            <input
              name="applicantName"
              placeholder="이름"
              value={form.applicantName}
              onChange={handleChange}
            />
            <input
              name="applicantDepartment"
              placeholder="학과"
              value={form.applicantDepartment}
              onChange={handleChange}
            />
            <input
              name="applicantStudentId"
              placeholder="학번"
              value={form.applicantStudentId}
              onChange={handleChange}
            />
            <input
              name="applicantPhone"
              placeholder="전화번호"
              value={form.applicantPhone}
              onChange={handleChange}
            />
          </div>

          <label className="section-label professor-title">지도교수</label>
          <div className="input-row professor-row">
            <input
              name="professorName"
              placeholder="이름"
              value={form.professorName}
              onChange={handleChange}
            />
            <input
              name="professorPhone"
              placeholder="전화번호"
              value={form.professorPhone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="modal-footer">
          <button type="button" className="submit-btn" onClick={handleSubmit}>
            작성 완료
          </button>
          <button type="button" className="cancel-btn" onClick={onClose}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReservationFormModal;