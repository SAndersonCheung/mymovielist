import styles from "../styles/components/Modal.module.scss";

const Modal = ({ isOpen = false, children }) => {
  return (
    <div
      className={styles.Modal}
      style={{ display: isOpen ? "block" : "none" }}
    >
      {children}
    </div>
  );
};
export default Modal;
