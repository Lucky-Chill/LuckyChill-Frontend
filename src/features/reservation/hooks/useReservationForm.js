import { useState } from 'react';
import { createReservation } from '../../../apis/reservationApi';

const INITIAL_FORM = {
  title: '',
  participantInfo: '',
  eventTypeClass: false,
  eventTypeSelfStudy: false,
  eventTypeStudyGroup: false,
  eventTypeEtc: false,
  eventTypeEtcText: '',
  useProjector: false,
  useComputer: false,
  useExtraEquipment: false,
  extraEquipment: '',
  reason: '',
  applicantName: '',
  applicantDepartment: '',
  applicantStudentId: '',
  applicantPhone: '',
  professorName: '',
  professorPhone: '',
};

/**
 * 선택된 행사 종류를 API 값으로 변환합니다.
 * @param {Object} form
 * @returns {"CLASS"|"SELF_STUDY"|"STUDY_GROUP"|"ETC"|null}
 */
const getEventType = (form) => {
  if (form.eventTypeClass) return 'CLASS';
  if (form.eventTypeSelfStudy) return 'SELF_STUDY';
  if (form.eventTypeStudyGroup) return 'STUDY_GROUP';
  if (form.eventTypeEtc) return 'ETC';
  return null;
};

/**
 * 예약 신청 폼의 입력 상태와 제출 로직을 관리합니다.
 * @param {Object} params
 * @param {Object} params.reservationData
 * @param {() => void} params.onClose
 * @returns {{ form: Object, handleChange: Function, handleSubmit: Function }}
 */
const useReservationForm = ({ reservationData, onClose }) => {
  const [form, setForm] = useState(INITIAL_FORM);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async () => {
    const body = {
      ...reservationData,
      title: form.title,
      participantInfo: form.participantInfo,
      eventType: getEventType(form),
      eventTypeEtc: form.eventTypeEtc ? form.eventTypeEtcText : null,
      useProjector: form.useProjector,
      useComputer: form.useComputer,
      extraEquipment: form.useExtraEquipment ? form.extraEquipment : '',
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
      alert('예약 신청이 완료되었습니다.');
      onClose();
    } catch (err) {
      console.error('예약 신청 실패:', err);
      alert('예약 신청 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  return {
    form,
    handleChange,
    handleSubmit,
  };
};

export default useReservationForm;
