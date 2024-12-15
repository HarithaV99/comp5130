const Contact = () => {
  return (
    <div
      style={{
        backgroundColor: '#e6f7ff',
        padding: '20px',
        borderRadius: '10px',
        minHeight: '100vh',
      }}
    >
      <h1>Contact Us</h1>
      <p>If you have questions or need assistance, feel free to reach out:</p>
      <h4>📧 Email: support@eventhub.com</h4>
      <h4>📞 Phone: +1 (123) 456-7890</h4>
      <h4>📍 Address: 123 Campus Street, Lowell, MA, 01854</h4>

      <h2>Send Us a Message</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
            style={{
              width: '100%',
              padding: '8px',
              margin: '5px 0',
              borderRadius: '5px',
            }}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
            style={{
              width: '100%',
              padding: '8px',
              margin: '5px 0',
              borderRadius: '5px',
            }}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            style={{
              width: '100%',
              padding: '8px',
              margin: '5px 0',
              borderRadius: '5px',
            }}
          ></textarea>
        </div>
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
