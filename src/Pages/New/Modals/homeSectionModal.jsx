import React, { useState } from 'react';
import Modal from 'react-modal';
import { customStyles } from '../../customStyle';

const HomeSectionModal = ({ isOpenModal, closeModal, data }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    closeModal('addAnotherImage');
  };

  return (
    <div>
      <Modal
        style={customStyles}
        isOpen={isOpenModal.addAnotherImage}
        onRequestClose={() => closeModal('addAnotherImage')}
      >
        <div className="flex flex-col gap-7 items-center text-white p-5">
          <h1 className="text-4xl text-center mb-4">Upload Image</h1>

          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <input
              type="file"
              onChange={handleImageUpload}
              className="border border-gray-400 rounded-lg p-2 bg-gray-800 text-white"
            />
            <button
              type="submit"
              className="p-2 px-5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Submit
            </button>
          </form>

          {selectedImage && (
            <div className="mt-4 text-center">
              <h2 className="text-2xl mb-2">Image Preview:</h2>
              <img
                src={selectedImage}
                alt="Preview"
                width={150}
                className="rounded shadow-lg"
              />
            </div>
          )}
        </div>
      </Modal>

      <Modal
        isOpen={isOpenModal.deleteImage}
        onRequestClose={() => closeModal('deleteImage')}
        style={customStyles}
      >
        <div className="flex flex-col items-center gap-7 text-white p-5">
          <h1 className="text-4xl text-center mb-4">Delete the Image</h1>
          <img
            src={data}
            alt="Delete Preview"
            width={300}
            className="rounded shadow-lg"
          />
          <button
            className="bg-red-500 text-white px-5 p-2 border rounded-lg w-1/2 hover:bg-red-600 transition-colors"
            onClick={() => closeModal('deleteImage')}
          >
            Yes, Delete
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default HomeSectionModal;
