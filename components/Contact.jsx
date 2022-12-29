import React from "react";

const Contact = () => {
  return (
    <div className="max-w-[1240px] m-auto p-4 h-screen">
      <h1 className="text-2xl font-bold text-center p-4">
        Let's work together
      </h1>
      <form className="max-w-[600px] m-auto">
        <div className="grid grid-cols-2 gap-2">
          <input
            className="border shadow-lg p-3"
            type="text"
            placeholder="Name"
          />
          <input
            className="border shadow-lg p-3"
            type="text"
            placeholder="Email"
          />
        </div>
        <input
          className="border shadow-lg p-3 w-full my-4"
          type="email"
          placeholder="Subject"
        />
        <textarea
          className="border shadow-lg p-3 w-full"
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
        />
        <button className="border shadow-lg p-3 w-full">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
