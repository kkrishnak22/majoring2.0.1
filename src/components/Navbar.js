import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserContext } from "../context/UserProvider";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const { authUser, setAuthUser } = useContext(UserContext);
  const [showDropdown, setShowDropdown] = useState(false);
  function handleSignOut(e) {
    e.preventDefault();
    setAuthUser(null);
    navigate('/')
  }
  function handleProfileClick() {
    setShowDropdown(true);
    setTimeout(() => setShowDropdown(false), 3000);
  }
  return (
    <div className="">
      <nav className=" p-2 top-5 left-2 right-0 z-10 bg-black">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
          <div className="relative flex items-center justify-between h-16 ">
            <div className="flex-shrink-0">
              <p className="text-green-400 font-serif  text-5xl ">Majoring</p>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <a
                  href="/"
                  className="text-gray-300 hover:bg-purple-500 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                >
                  Home
                </a>
                {authUser && (
                  <a
                    href="/editor"
                    className="text-gray-300 hover:bg-purple-500 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                  >
                    Editor
                  </a>
                )}
                <a
                  href="/about"
                  className="text-gray-300 hover:bg-purple-500 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                >
                  About
                </a>
              </div>
            </div>
            { authUser ? (
              <div className="ml-4 flex items-center sm:ml-6 relative">
                <a
                  className="text-gray-300 hover:bg-purple-500 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                  onClick={handleProfileClick}
                >
                  Profile
                </a>
                <div
                  onClick={handleSignOut}
                  className="text-gray-300 hover:bg-purple-500 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                >
                  Sign out
                </div>
                {showDropdown && (
                  <div className="absolute top-0 right-0 bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out">
                    <div className="px-4 py-2">
                      <p className="text-gray-500 text-sm">{authUser.email}</p>
                    </div>
                    <div className="bg-gray-100 px-4 py-2">
                      <Link
                        to="/profile"
                        className="block text-gray-700 hover:text-white hover:bg-purple-500 px-2 py-1 rounded-md text-sm font-medium"
                      >
                        Profile
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="ml-4 flex items-center sm:ml-6">
                <a
                  href="/signin"
                  className="text-gray-300 hover:bg-purple-500 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                >
                  Sign In
                </a>
                <a
                  href="/signup"
                  className="text-gray-300 hover:bg-purple-500 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                >
                  Sign Up
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
