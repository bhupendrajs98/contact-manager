import React, { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!email) errs.email = "Email zaroori hai";
    else if (!/^\S+@\S+\.\S+$/.test(email)) errs.email = "Valid email dalen";
    if (!password) errs.password = "Password zaroori hai";
    else if (password.length < 6) errs.password = "Password kam se kam 6 characters ka hona chahiye";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length === 0) {
      // No authentication: just a frontend demo action
      console.log("Login (demo):", { email, password });
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Login</h2>

        {submitted ? (
          <div className="p-4 bg-green-50 border border-green-200 rounded-md">
            <p className="text-green-700 font-medium">Frontend-only: You are "logged in" (demo).</p>
            <p className="text-sm text-gray-600 mt-2">Email: <span className="font-semibold">{email}</span></p>
            <button
              className="mt-4 inline-block px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
              onClick={() => {
                setSubmitted(false); setEmail(""); setPassword(""); setErrors({});
              }}
            >
              Logout (demo)
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full mb-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 ${errors.email ? 'border-red-400' : 'border-gray-200'}`}
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-xs text-red-500 mb-2">{errors.email}</p>}

            <label className="block mt-3 mb-2 text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full mb-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 ${errors.password ? 'border-red-400' : 'border-gray-200'}`}
              placeholder="Enter password"
            />
            {errors.password && <p className="text-xs text-red-500 mb-2">{errors.password}</p>}

            <div className="flex items-center justify-between mt-4">
              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700"
              >
                Login
              </button>
              <a href="#" onClick={(e)=>e.preventDefault()} className="text-sm text-blue-600 hover:underline">Forgot password?</a>
            </div>

            <p className="text-xs text-gray-500 mt-4">Note: Yeh page sirf frontend demo hai — koi real authentication nahi hai.</p>
          </form>
        )}
      </div>
    </div>
  );
}
