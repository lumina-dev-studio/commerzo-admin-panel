// // Use 'use client' directive to specify that this file is client-side
// "use client";

// // Store user information in local storage
// export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
//   if (typeof window !== "undefined") {
//     localStorage.setItem("accessToken", accessToken);
//   }
// };

// // Retrieve user information from local storage
// export const getUserInfo = () => {
//   if (typeof window !== "undefined") {
//     return localStorage.getItem("accessToken");
//   }
//   return null;
// };

// // Remove user information from local storage
// export const removeFromLocalStorage = () => {
//   if (typeof window !== "undefined") {
//     localStorage.removeItem("accessToken");
//   }
// };

// // Check if the user is logged in
// export const isLoggedIn = () => {
//   const authToken = getUserInfo();
//   return !!authToken;
// };





"use client";

import Cookies from "js-cookie";

// Store user information in cookies
export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  if (typeof window !== "undefined") {
    // Set the access token cookie
    Cookies.set("accessToken", accessToken, {
      expires: 30, // Cookie expires in 30 days
      secure: true, // Ensure the cookie is sent over HTTPS
      sameSite: "Lax", // Control when the cookie is sent
      path: "/", // Available throughout the site
    });
  }
};

// Retrieve user information from cookies
export const getUserInfo = () => {
  if (typeof window !== "undefined") {
    // Get the access token cookie
    return Cookies.get("accessToken") || null;
  }
  return null;
};

// Remove user information from cookies
export const removeFromCookies = () => {
  if (typeof window !== "undefined") {
    // Remove the access token cookie
    Cookies.remove("accessToken", { path: "/" });
  }
};

// Check if the user is logged in
export const isLoggedIn = () => {
  const authToken = getUserInfo();
  return !!authToken;
};
