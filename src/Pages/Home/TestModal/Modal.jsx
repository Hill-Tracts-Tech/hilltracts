const Modal = (open) => {
  console.log(open);
  if (open==1) return null;
  return (
    <div>
      Modal opened
    </div>
  );
};

export default Modal;