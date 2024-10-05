import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import PrimaryButton from '../ui/PrimaryButton'; // Assuming this is the path to your PrimaryButton component

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        from_name: formData.email, // assuming you're passing the email as the sender
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email
      },
      'YOUR_API_KEY'
    )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          // Optionally show success feedback to the user
        },
        (error) => {
          console.log('Failed to send email:', error.text);
        }
      );
  };

  return (
      <form onSubmit={sendEmail} className="w-full flex flex-col gap-9">
        {/* Email Input */}
        <div className="w-full flex flex-col gap-2">
          <label className="text-light text-base font-medium font-display">
            Your email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="youremail@example.com"
            className="w-full h-14 p-4 bg-primary rounded-lg border border-dark text-light placeholder-[#afaacf] font-display border-b-[.5px]"
            required
          />
        </div>

        {/* Subject Line Input */}
        <div className="w-full flex flex-col gap-2">
          <label className="text-light text-base font-medium font-display">
            Subject Line
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder="Inquiring about a web design project"
            className="w-full h-14 p-4 bg-primary rounded-lg border border-dark placeholder-[#afaacf] text-light/90 font-display border-b-[.5px]"
            required
          />
        </div>

        {/* Message Textarea */}
        <div className="w-full flex flex-col gap-2">
          <label className="text-light text-base font-medium font-display">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Start typing..."
            className="w-full h-36 p-4 bg-primary rounded-lg border border-dark  text-light placeholder-[#afaacf] resize-none font-display border-b-[.5px]"
            required
          ></textarea>
        </div>

        {/* Primary Button */}
        <div className="mt-6 flex justify-start">
          <PrimaryButton label="Get in Touch" className="w-auto" />
        </div>
      </form>
  );
};

export default ContactForm;
