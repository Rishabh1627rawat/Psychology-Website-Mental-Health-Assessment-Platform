import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserInfoForm = ({ setUser }) => {
  const [userData, setUserData] = useState({
    name: "",
    age: "",
    gender: "",
    email: "",
    consent: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserData({
      ...userData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userData.consent) {
      alert("Please provide consent to proceed.");
      return;
    }
  
    // Navigate with state
    navigate("/testflow", { state: { user: userData } });
  };
  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Before You Start</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label htmlFor="name" className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="w-full border p-2 rounded"
            value={userData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="age" className="block mb-1 font-medium">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            placeholder="Enter your age"
            className="w-full border p-2 rounded"
            value={userData.age}
            onChange={handleChange}
            required
            min="1"
          />
        </div>

        <div>
          <label htmlFor="gender" className="block mb-1 font-medium">Gender</label>
          <select
            id="gender"
            name="gender"
            className="w-full border p-2 rounded"
            value={userData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Non-binary">Non-binary</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 font-medium">Email <span className="text-gray-500">(optional)</span></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full border p-2 rounded"
            value={userData.email}
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={userData.consent}
            onChange={handleChange}
          />
          <label htmlFor="consent" className="text-sm">
            I agree to share my data to improve the platform.
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Start Test
        </button>
      </form>
    </div>
  );
};

export default UserInfoForm;
