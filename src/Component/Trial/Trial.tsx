import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

const apiKey = 'Zdwip79viMKg6MWa1kiGMpJ8S26YXMrnhAIoEHtKPrKJQGyP5dNnxNFfEFZFrXR3';
const apiEndpoint = 'https://ap-south-1.aws.data.mongodb-api.com/app/data-hzbdd/endpoint/data/v1'; // Replace with your actual endpoint

const BlogForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    text: '',
    image: null,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Handle potential null value
    setFormData({
      ...formData,
    //   image: file || null, // Ensure image is either a file or null
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('title', formData.title);
      formDataToSend.append('text', formData.text);
    //   formDataToSend.append('image', formData.image);

      const response = await axios.post(apiEndpoint, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${apiKey}`, // Include the API key in the Authorization header
        },
      });
      console.log('Blog post created:', response.data);
      // Optionally, clear the form or show a success message
    } catch (error) {
      console.error('Error creating blog post:', error);
      // Handle errors (e.g., show an error message)
    }
  };

  return (
    <div>
      <h2>Create a Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Title:</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </div>
        <div>
          <label>Text:</label>
          <textarea name="text" value={formData.text} onChange={handleChange} />
        </div>
        <div>
          <label>Image:</label>
          <input type="file" accept="image/jpeg" onChange={handleImageChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

function Trial() {
  return (
    <div className="App">
      <BlogForm />
    </div>
  );
}

export default Trial;
