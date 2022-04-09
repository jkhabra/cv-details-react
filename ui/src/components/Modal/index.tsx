import "./styles.scss";

interface ModalProps {
  onClose: () => void;
  children: React.ReactElement;
  isOpen: boolean;
  hideOnOutsideClick?: boolean;
}

const Modal: React.FC<ModalProps> = (p) => {
  if (!p.isOpen) {
    return null;
  }

  const handleCoseOutside = () => {
    if (p.hideOnOutsideClick) return;
    p.onClose();
  };

  return (
    <>
      <div className={"backdrop"} />
      <div className={"modal-wrapper"} onClick={handleCoseOutside}>
        <div className={"modal-wrapper-body"} onClick={(e) => e.stopPropagation()}>
          {p.children}
        </div>
      </div>
    </>
  );
};

export default Modal;
