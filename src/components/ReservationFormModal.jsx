import { useState } from "react";
import "./ReservationFormModal.css";

function ReservationFormModal({ onClose }) {
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
    applicantStudentId: "",
    applicantPhone: "",
    professorName: "",
    professorPhone: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = () => {
    console.log("예약 신청 데이터:", form);
    alert("예약 신청이 완료되었습니다.");
    onClose();
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