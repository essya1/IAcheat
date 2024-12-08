"use client";

import { useState } from "react"; // React hook for managing state
import { ToastContainer, toast } from "react-toastify"; // Toast notifications for feedback
import "react-toastify/dist/ReactToastify.css"; // Import default styles for react-toastify

const CombinedPage = () => {
  // State management
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Toggle between login and upload form
  const [email, setEmail] = useState(""); // User's email input
  const [password, setPassword] = useState(""); // User's password input
  const [file, setFile] = useState<File | null>(null); // Uploaded file state
  const [isCheat, setIsCheat] = useState<boolean | null>(null); // Cheat detection result

  // Handle login form submission
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Hardcoded authentication logic
    if (email === "essya@gmail.com" && password === "essya") {
      setIsLoggedIn(true); // Set user as logged in
      toast.success("Login successful! Welcome back."); // Success feedback
    } else {
      toast.error("Invalid credentials! Please try again."); // Error feedback
    }
  };

  // Handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]); // Save selected file to state
    }
  };

  // Handle cheat detection logic
  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (!file) {
      // Ensure a file is selected
      toast.error("Please upload a file before checking.");
      return;
    }
    // Simulate cheat detection result using random logic
    const cheatDetected = Math.random() > 0.5;
    setIsCheat(cheatDetected); // Update state with result
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-100 to-green-100">
      {/* Toast container for showing notifications */}
      <ToastContainer />
      {!isLoggedIn ? (
        // Login form
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Login</h1>
          <form onSubmit={handleLogin}>
            {/* Email input */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            {/* Password input */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>
            {/* Login button */}
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition"
            >
              Login
            </button>
          </form>
        </div>
      ) : (
        // File upload and cheat detection form
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold mb-6 text-center text-green-600">Upload File</h1>
          <form onSubmit={handleCheck}>
            {/* File input */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Select File</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="block w-full border border-gray-300 rounded-lg py-2 px-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            {/* Cheat detection result display */}
            <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
              {isCheat === null
                ? "Please check for cheating."
                : isCheat
                ? "Cheating detected!"
                : "No cheating detected."}
            </h1>
            {/* Check button */}
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition"
            >
              Check for Cheating
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CombinedPage;
