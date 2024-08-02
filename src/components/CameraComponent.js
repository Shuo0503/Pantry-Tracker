import React, { useState, useRef } from "react";
import { Camera } from "react-camera-pro";

export default function CameraComponent() {
  const camera = useRef(null);
  const [image, setImage] = useState(null);

  const handleTakePhoto = async () => {
    const photo = await camera.current.takePhoto();
    setImage(photo);
  };

  return (
    <div>
      <Camera ref={camera} />
      <button onClick={handleTakePhoto}>Take Photo</button>
      {image && <img src={image} alt='Taken photo' />}
    </div>
  );
}
