import React from "react";
import styles from "./AlertModal.module.css";

const AlertModal = ({setIsAlert,removeItem}) => {
    const closeModal = () =>{
        setIsAlert(false);
    }

    const handleDelete = () => {
        removeItem();
    }

  return (
    <>
      <div id="myModal" class={styles.modal}>
        <div class={styles.modalContent}>
          <span onClick={closeModal} class={styles.close}>&times;</span>
          <p>Are you sure you want to Delete?</p>
          <div class={styles.buttonContainer}>
            <button onClick={handleDelete}>Yes</button>
            <button onClick={closeModal}>No</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlertModal;
