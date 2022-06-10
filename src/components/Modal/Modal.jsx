import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ children, clickOutside }) => {

   return (
      <div
         className={styles.Modal}
         onClick={clickOutside}
      >
         <div
            className={styles.modalDialog}
            onClick={e => e.stopPropagation()}
         >
            {children}
         </div>
      </div>
   );
};

export default Modal;