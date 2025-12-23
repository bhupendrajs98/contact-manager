// src/auth/auth.js

// check login
export function isLoggedIn() {
  return !!localStorage.getItem("authUser");
}

// login
export function loginUser(user) {
  localStorage.setItem("authUser", JSON.stringify(user));
}

// logout
export function logoutUser() {
  localStorage.removeItem("authUser");
}
