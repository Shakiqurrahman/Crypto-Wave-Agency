import React from "react";

const ClientContact = () => {
  return (
    <form className=" mx-auto max-w-[800px]">
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <input
          type="text"
          className="bg-[#110c2eb3] px-6 py-4 rounded-lg w-full outline-none placeholder:text-dark/60"
          required
          placeholder="Your Name"
        />
        <input
          type="text"
          className="bg-[#110c2eb3] px-6 py-2 rounded-lg w-full outline-none placeholder:text-dark/60"
          required
          placeholder="Company / Project Name"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <input
          type="email"
          className="bg-[#110c2eb3] px-6 py-4 rounded-lg w-full outline-none placeholder:text-dark/60"
          required
          placeholder="Your email"
        />
        <input
          type="number"
          className="bg-[#110c2eb3] px-6 py-2 rounded-lg w-full outline-none placeholder:text-dark/60"
          required
          placeholder="Phone Number"
        />
      </div>
      <div className="bg-[#110c2eb3] p-8 rounded-lg mb-4">
        <h3 className="mb-4 text-dark">Subject</h3>
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
              name="Connections
              "
              id="Connections
              "
              className="size-5 accent-secondary"
            />
            <label
              htmlFor="Connections
"
            >
              Connections
            </label>
          </div>
        </div>
      </div>
      <div className="bg-[#110c2eb3] p-8 rounded-lg">
        <h3 className="mb-4 text-dark">What's your budget</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6">
          <div className="flex items-center space-x-3">
            <input
              type="radio"
              name="budget"
              id="first"
              className="size-5 accent-secondary"
            />
            <label htmlFor="first">less than $10,000</label>
          </div>
          <div className="flex items-center space-x-3">
            <input
              type="radio"
              name="budget"
              id="two"
              className="size-5 accent-secondary"
            />
            <label htmlFor="two">$10,000 - $50,000</label>
          </div>
          <div className="flex items-center space-x-3">
            <input
              type="radio"
              name="budget"
              id="third"
              className="size-5 accent-secondary"
            />
            <label htmlFor="third">$50,000 - $100,000</label>
          </div>
          <div className="flex items-center space-x-3">
            <input
              type="radio"
              name="budget"
              id="fourth"
              className="size-5 accent-secondary"
            />
            <label htmlFor="fourth">$100,000 - $200,000</label>
          </div>
          <div className="flex items-center space-x-3">
            <input
              type="radio"
              name="budget"
              id="fifth"
              className="size-5 accent-secondary"
            />
            <label htmlFor="fifth">$200,000 +</label>
          </div>
          <div className="flex items-center space-x-3">
            <input
              type="radio"
              name="budget"
              id="sixth"
              className="size-5 accent-secondary"
            />
            <label htmlFor="sixth">Not Determined</label>
          </div>
        </div>
      </div>
      <textarea className="w-full bg-[#110c2eb3] mt-4 rounded-lg px-5 py-4 outline-none resize-none" placeholder="Your Message" name="" id="" cols="10" rows="4">
        
      </textarea>
    </form>
  );
};

export default ClientContact;
