import React from "react";
import emailjs from '@emailjs/browser';

const Book = () => {

const[name, setName] = React.useState("");
const[email, setEmail] = React.useState("");
const[message, setMessage] = React.useState("");

const handleSubmit = (e) => {
  e.preventDefault();

  const serviceId= "service_7r913qs";
  const templateId ="template_wyi1jtt";
  const publicKey ="SeDxa7LVSd7lNLQyq";

  const templateParams = {
    from_name: name,
    from_email: email,
    to_name:"Wellness Team",
    message: message,

}

emailjs.send(serviceId, templateId, templateParams, publicKey)
  .then((response) => {
    console.log("Email sent successfully", response);
    setName("");
    setEmail("");
    setMessage("");
    alert("Email sent successfully!");
  })
  .catch((error) => {
    console.error("Error sending email:", error);
    alert("Failed to send email. Please try again later.");
  });
}

  return (
    
      <form onSubmit={handleSubmit} className="contact-form">
        <fieldset>
          <legend>Email Form</legend>
          <label>Name</label>
          <input 
          type="text" 
          placeholder="Enter your name" required style={{ marginBottom: '50px' }}
          value={name}
          onChange={(e) => setName(e.target.value)} 
          />

          <br />
          <label>Email</label>
          <input 
          type="email" 
          name="email" placeholder="Enter your email" required style={{ marginBottom: '50px' }} 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label>Message</label>
          <br />

          <textarea
          cols="80"
          rows="10"
          placeholder="Enter your message" required style={{ marginBottom: '50px' }}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          >
          </textarea>

          <br/> 
          <button type="submit">Send Email</button>
        </fieldset>
      </form>
   
  );
};

export default Book;
