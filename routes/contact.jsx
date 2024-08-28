import React, { useState } from 'react';
import './contact.css';

export default function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here, such as sending data to a backend server
        console.log(formData);
        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div>
            <h1>Location</h1>
            <div className="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190255.8460334488!2d-87.73196395!3d41.83373295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL!5e0!3m2!1sen!2sus!4v1724737811824!5m2!1sen!2sus" width="600" height="450" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="contact-container">
                <h2>Contact Me!</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}
