import clsx from 'clsx';
import React from 'react';

const ModalWrapper = ({ isOpen, onClose, children,className }) => {
  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center mx-6`}>
      {/* Background overlay */}
      <div
        className="fixed inset-0 bg-black opacity-45 "
        onClick={onClose}
      ></div>

      {/* Modal box */}
      <div className={clsx(`relative z-50 bg-white rounded-lg shadow-lg w-full max-w-xl  p-7 ${className}`)}>
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
