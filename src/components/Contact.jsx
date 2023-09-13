// Importing required modules from React
import React, { useRef, useState } from "react";
import mail_logo from "./assests/mail_logo.svg";
import linkedin_logo from "./assests/linkedin_logo.svg";
// Importing motion-related modules from framer-motion library
import { motion } from "framer-motion";
import github_logo from "./assests/github_logo.svg";
// Importing the emailjs library for sending email from the form
import emailjs from "@emailjs/browser";

// Importing styles and custom motion utilities from other files
import { styles } from "../styles";
import { slideIn } from "../utils/motion";

// Importing the EarthCanvas component from the "./canvas" file
import { EarthCanvas } from "./canvas";

// Importing the higher-order component (HOC) SectionWrapper
import { SectionWrapper } from "../hoc";
import { github } from "./assests";

// Contact component that represents the contact form section
const Contact = () => {
  // Ref for the form element
  const formRef = useRef();

  // State to manage form data and loading status
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // Function to handle changes in form fields
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // Function to handle form submission
  // template_0o9djuo
  // service_tm179ga
  // UyEnztMbUWZQR98CY
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Sending email using emailjs API
    emailjs
      .send(
        "service_tm179ga",
        "template_0o9djuo",
        {
          from_name: form.name,
          to_name: "Nitesh Meena",
          from_email: form.email,
          to_email: "niteshmeena9672@gmail.com",
          message: form.message,
        },
        "UyEnztMbUWZQR98CY"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          // Resetting the form fields after successful submission
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-10 flex xl:flex-row flex-col-reverse gap-12 overflow-hidden`}
    >
      {/* Contact form section */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={`text-center ${styles.sectionHeadText}`}>Contact.</h3>
        <div className="flex ml-0 space-x-4 md:space-x-6 lg:space-x-8 items-center justify-center">
          <a
            href="https://www.linkedin.com/in/nitesh-meena-2512a6212/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedin_logo}
              alt="LinkedIn Logo"
              className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white hover:text-primary transition"
            />
          </a>

          <a href="mailto:meena.58@iitj.ac.in">
            <img
              src={mail_logo}
              alt="Mail Logo"
              className=" w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white hover:text-primary transition"
            />
          </a>
          <a href="https://github.com/Niteshmeena9672" target="#">
            <img
              src={github_logo}
              alt="Github Logo"
              className=" w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white hover:text-primary transition"
            />
          </a>
        </div>

        {/* Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-4"
        >
          {/* Name input */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4 text-xl">
              Your Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          {/* Email input */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4 text-xl">
              Your email
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          {/* Message textarea */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4 text-xl">
              Your Message
            </span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          {/* Submit button */}
          <button
  type="submit"
  className="bg-purple-600 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md"
>
  {loading ? "Sending..." : "Send"}
</button>

        </form>
      </motion.div>

      {/* EarthCanvas component */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

// Exporting the Contact component wrapped with the SectionWrapper HOC, with a section ID of "contact"
export default SectionWrapper(Contact, "contact");
