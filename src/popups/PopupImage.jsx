import React from 'react'

function PopupImage({onClose}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-3/4 h-3/4 p-4 rounded shadow-lg relative">
        <span
          className="absolute top-2 right-7 text-red cursor-pointer hover:text-gray-900 z-60"
          onClick={onClose}
        >
          X
        </span>
        <img src={require("../images/meetjaphokee/Advertisement_Image1.jpeg")} alt="Popup" className="w-full h-full object-contain" />
      </div>
    </div>
  )
}

export default PopupImage