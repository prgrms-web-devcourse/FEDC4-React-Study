import React from 'react'
import classes from './Modal.module.css'
import { useNavigate } from 'react-router-dom'

function Modal({children}) {
  const navigate = useNavigate();

  function closeHandler() {
    // 절대경로와 상대경로 모두 사용가능
    navigate('../');
  }
  return <>
    <div className={classes.backdrop} onClick={closeHandler}/>
    <dialog open className={classes.modal}>
        {children}
    </dialog>
  </>
}

export default Modal