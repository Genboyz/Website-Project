import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

function Contact() {
  const form = useRef();
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_we964ce", "template_1hamo4m", form.current, {
        publicKey: "lzoCBEAXYlpIaNPDS",
      })
      .then(
        () => {
          setMessage("Message sent successfully!");
          setMessageType("success");
          setTimeout(() => {
            setMessage(null);
          }, 5000);
          form.current.reset();
        },
        (error) => {
          setMessage(`Failed to send message: ${error.text}`);
          setMessageType("error");
          setTimeout(() => {
            setMessage(null);
          }, 5000);
        }
      );
  };

  return (
    <div className="bg-coffee-pattern bg-cover bg-fixed min-h-screen w-screen flex items-center justify-center p-8">
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-4xl space-y-8 md:w-[90%] mx-auto">
        {/* Notification */}
        {message && (
          <div
            className={` z-30 fixed top-4 right-4 py-2 px-4 rounded-md shadow-md transition-all duration-300 ${
              messageType === "success"
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            }`}
          >
            {message}
          </div>
        )}
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-yellow-600 mb-4">
            Contact Us
          </h1>
          <p className="text-gray-700 font-semibold">
            We'd love to hear from you! Whether you have a question about our
            services, need assistance, or just want to talk coffee.
          </p>
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-bold">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <FiMapPin className="text-yellow-600" size={20} />
              <p className="text-gray-700">Adiss Ababa, Ethiopia</p>
            </div>
            <div className="flex items-center space-x-2">
              <FiPhone className="text-yellow-600" size={20} />
              <p className="text-gray-700">+251 9 11 81 88 34</p>
            </div>
            <div className="flex items-center space-x-2">
              <FiMail className="text-yellow-600" size={20} />
              <p className="text-gray-700">et.jebena@gmail.com</p>
            </div>
          </div>

          <form className="space-y-4" ref={form} onSubmit={sendEmail}>
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50 p-2"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50 p-2"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50 p-2"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-600 text-white py-2 rounded-md hover:bg-yellow-700 focus:outline-none focus:bg-yellow-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
