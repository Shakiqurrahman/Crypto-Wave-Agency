import React from "react";

const ContactForm = () => {
  return (
    <div className=" mx-auto max-w-[800px]">
      <form action="https://formspree.io/f/xjvnpvae" method="post">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input
            type="text"
            className="bg-[#110c2eb3] px-6 py-3 rounded-lg w-full outline-none placeholder:text-dark/90"
            required
            placeholder="Your Name"
            name="Name"
          />
          <input
            type="text"
            className="bg-[#110c2eb3] px-6 py-3 rounded-lg w-full outline-none placeholder:text-dark/90"
            required
            placeholder="Company / Project Name"
            name="Company / Project Name"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input
            type="email"
            className="bg-[#110c2eb3] px-6 py-3 rounded-lg w-full outline-none placeholder:text-dark/90"
            required
            placeholder="Your email"
            name="Email"
          />
          <input
            type="number"
            className="bg-[#110c2eb3] px-6 py-3 rounded-lg w-full outline-none placeholder:text-dark/90"
            required
            placeholder="Phone Number"
            name="Phone Number"
          />
        </div>
        <div className="bg-[#110c2eb3] p-8 rounded-lg mb-4">
          <h3 className="mb-4 text-dark/90">Subject</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6">
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                name="incubation"
                id="incubation"
                className="size-5 accent-secondary"
              />
              <label htmlFor="incubation">Incubation</label>
            </div>
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                name="consulting"
                id="consulting"
                className="size-5 accent-secondary"
              />
              <label htmlFor="consulting">Consulting</label>
            </div>
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                name="Marketing"
                id="Marketing"
                className="size-5 accent-secondary"
              />
              <label htmlFor="Marketing">Marketing</label>
            </div>
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                name="Development"
                id="Development"
                className="size-5 accent-secondary"
              />
              <label htmlFor="Development">Development</label>
            </div>
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                name="connections"
                id="connections"
                className="size-5 accent-secondary"
              />
              <label htmlFor="connections">Connections</label>
            </div>
          </div>
        </div>
        <textarea
          className="w-full bg-[#110c2eb3] rounded-lg px-5 py-4 outline-none resize-none placeholder:text-dark/80"
          placeholder="Your Message"
          name="Message"
          id=""
          rows="3"
        ></textarea>
        <div className="text-center mt-3">
          <button
            className="borde border-secondary w-full px-8 py-3 bg-[#110c2eb3] hover:bg-white hover:text-black duration-300 rounded-lg font-semibold uppercase tracking-wider text-sm sm:text-lg"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
