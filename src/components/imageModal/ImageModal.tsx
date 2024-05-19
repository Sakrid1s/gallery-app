import React from 'react';
import Modal from 'react-modal';

interface ImageModalProps {
  image: { src: string; alt: string } | null;
  isOpen: boolean;
  closeModal: () => void;
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
};

const ImageModal: React.FC<ImageModalProps> = ({
  image,
  isOpen,
  closeModal,
}) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        style={customStyles}
        onRequestClose={closeModal}
        contentLabel="Image modal"
        appElement={document.getElementById('root') as HTMLElement}
      >
        {image && <img src={image.src} alt={image.alt} />}
      </Modal>
    </div>
  );
};

export default ImageModal;
