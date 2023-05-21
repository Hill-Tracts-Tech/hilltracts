import { useState } from "react";
import Modal from "./Modal";

const ShowModal = () => {
  const [openModal, setOpenModal] = useState(0);
  const handleOpenModal = () => {
    setOpenModal(1);
  }
  return (
    <div>
      <button onClick={handleOpenModal}>Open</button>
      <Modal open={openModal} />
    </div>
  );
};

export default ShowModal;