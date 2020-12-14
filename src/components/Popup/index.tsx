import React, { ReactNode } from "react";
import { FaTimes } from "react-icons/fa";
import { Button, ButtonsGroup } from "../Forms/Button";
import { Row } from "../Layout";
import style from "./popup.module.css";
import Modal from 'react-modal';

interface PopupProps {
  isOpen: boolean,
  showConfirmButtons?: boolean;
  size?: 'small' | 'medium' | 'large';
  children?: ReactNode;
  onRequestClose: (isOpen: boolean) => any;
  onConfirmClick?: () => void;
  onDenyClick?: () => void;
}

if (process.env.NODE_ENV !== 'test') {
  Modal.setAppElement('#root');
}

const Popup: React.FC<PopupProps> = ({
  size = 'medium', 
  showConfirmButtons,
  onConfirmClick,
  onDenyClick,
  ...props
}) => {

  const getSizeClass = () => {
    switch(size) {
      case 'small': return style.small;
      case 'large': return style.large;
      default : return style.medium;
    }
  }

  const renderSaveButtons = () => (
    <ButtonsGroup>
      <Row noWrap>
        <Button type="submit" onClick={onConfirmClick}> Salvar </Button>
        <Button style={{marginLeft: 5}} template="secondary" type="button" onClick={onDenyClick}> Cancelar </Button>
      </Row>
    </ButtonsGroup>
  );

  return (
    <Modal
      isOpen={props.isOpen}
      shouldCloseOnOverlayClick={true}
      onRequestClose={props.onRequestClose.bind(null, false)}
      overlayClassName={style.overlay}
      className={`${style.content} ${getSizeClass()}`}  
    >
      <div style={{textAlign: 'center', marginBottom: 9}}>
        <button title="Fechar popup" className={style.closeButton} onClick={props.onRequestClose.bind(null, false)}> 
          <FaTimes className={style.closeIcon}/>
        </button>
      </div>
      <div className={style.childrenContent}>
        {props.children}
      </div>

      {showConfirmButtons && renderSaveButtons()} 
    </Modal>
  )
};

export default Popup;