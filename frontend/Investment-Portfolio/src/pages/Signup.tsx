import React, { useState } from "react";
import { saveUser, getUsers } from "../utils/localStorage";
import { User } from "../types/User";

const Signup: React.FC = () => {
  const [formData, setFormData] = useState<User>({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const existingUsers = getUsers();
    if (existingUsers.some((user) => user.email === formData.email)) {
      alert("Email already registered!");
    } else {
      saveUser(formData);
      alert("Signup successful!");
      setFormData({ username: "", email: "", password: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
