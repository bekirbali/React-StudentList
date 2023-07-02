import React from "react";

const AddUpdateStudent = () => {
  return (
    <div>
      <input type="text" name="name" placeholder="Enter your name" />
      <input
        type="image"
        name="image"
        alt="avatar"
        placeholder="add a profile picture"
      />
      <input type="email" name="email" placeholder="Enter your email" />
      <input type="number" name="phone" placeholder="Enter your phone" />
      <input type="text" name="domain" placeholder="Enter your domain" />
      <input type="text" name="company" placeholder="Enter your company name" />
    </div>
  );
};

export default AddUpdateStudent;
