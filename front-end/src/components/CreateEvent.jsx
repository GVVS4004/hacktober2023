// EventForm.js
import  { useState } from 'react';

const EventForm = () => {
  const [eventName, setEventName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleEventNameChange = (e) => {
    setEventName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform the form submission logic here, e.g., send data to the server

    // Reset the form fields
    setEventName('');
    setDescription('');
    setImage(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="eventName">Event Name:</label>
        <input
          type="text"
          id="eventName"
          name="eventName"
          value={eventName}
          onChange={handleEventNameChange}
          required
        />
      </div>

      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={handleDescriptionChange}
          required
        />
      </div>

      <div>
        <label htmlFor="image">Upload Image:</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          required
        />
        {image && (
          <img
            src={URL.createObjectURL(image)}
            alt="Preview"
            style={{ maxWidth: '100%', marginTop: '10px' }}
          />
        )}
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default EventForm;
