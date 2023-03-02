
import classes from "./Modal.module.scss";

function Modal({ children }) {

  return (
    <>
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
