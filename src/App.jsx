import { useState } from "react";
import ReservationFormModal from "./components/ReservationFormModal";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: "40px" }}>
      <button onClick={() => setOpen(true)}>
        예약 신청 열기
      </button>

      {open && (
        <ReservationFormModal
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
}

export default App;