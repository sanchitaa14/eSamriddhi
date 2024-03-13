import React, { useState } from 'react';
import Webcam from 'react-webcam';
import { firestore, storage } from '../../backend/firebase'; // Import firestore and storage from your firebase.js file

const CameraComponent = () => {
  const [fullName, setFullName] = useState('');
  const [photoURL, setPhotoURL] = useState(null);
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setPhotoURL(imageSrc);
  }, [webcamRef]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Upload photo to Firebase Storage
      const photoRef = storage.ref().child(`photos/${fullName}-${Date.now()}.png`);
      await photoRef.putString(photoURL, 'data_url');

      // Get download URL of uploaded photo
      const photoURL = await photoRef.getDownloadURL();

      // Add user data to Firestore
      await firestore.collection('VillagerProfile').add({
        fullName,
        photoURL
      });

      // Reset form
      setFullName('');
      setPhotoURL(null);

      // Optionally, you can display a success message to the user
      alert('Data uploaded successfully!');
    } catch (error) {
      console.error('Error uploading data:', error.message);
      // Optionally, you can display an error message to the user
      alert('Error uploading data. Please try again.');
    }
  };

  return (
    <div>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/png"
      />
      <button onClick={capture}>Capture Photo</button>
      <form onSubmit={handleSubmit}>
        <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Full Name" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CameraComponent;
