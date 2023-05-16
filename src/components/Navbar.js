import React, { useContext, useState, useEffect } from "react";

import { UserContext } from "../context/UserProvider";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AiOutlineMenu } from "react-icons/ai";
export default function Navbar() {
  const navigate = useNavigate();
  const { authUser, setAuthUser } = useContext(UserContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(false);

const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleSignOut(e) {
    const notify = () => toast("Singning out!");
    setLoading(true);
    e.preventDefault();
    setAuthUser(null);
    setLoading(false);
    notify();
    navigate("/");
  }
  function handleProfileClick() {
    setShowDropdown(true);
    setTimeout(() => setShowDropdown(false), 3000);
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setTimeout(() => setIsDropdownOpen(false), 2000);
  };
  return (
    <div className="">
      <nav className=" p-2 top-5 left-2 right-0 z-10 bg-black">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
          <div className="relative flex items-center justify-between h-16 ">
            <div className="flex-shrink-0">
              {width < 649 ? (
                <div className="relative">
      <button
        className="flex items-center justify-center text-gray-300 hover:bg-purple-500 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
        onClick={toggleDropdown}
      >
         <AiOutlineMenu size={24} />   Menu
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-10">
          <Link
            to="/"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Home
          </Link>
         {authUser&& <Link
            to="/editor"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Editor
          </Link>}
          <Link
            to="/about"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            About
          </Link>
        </div>
      )}
    </div>
              ) : (
                <p className="text-green-400 font-serif  text-5xl ">Majoring</p>
              )}
            </div>

            <div>{width}</div>

            <ToastContainer />
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link
                  to="/"
                  className="text-gray-300 hover:bg-purple-500 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                >
                  Home
                </Link>
                {authUser && (
                  <Link
                    to="/editor"
                    className="text-gray-300 hover:bg-purple-500 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                  >
                    Editor
                  </Link>
                )}
                <Link
                  to="/about"
                  className="text-gray-300 hover:bg-purple-500 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                >
                  About
                </Link>
              </div>
            </div>
            {authUser ? (
              <div className="ml-4 flex items-center sm:ml-6 relative">
                <a
                  className="text-gray-300 hover:bg-purple-500 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                  onClick={handleProfileClick}
                >
                  Profile
                </a>
                {loading ? (
                  <div className="text-gray-300 hover:bg-purple-500 hover:text-white px-3 py-2 rounded-md text-xl font-medium">
                    Signing out....
                  </div>
                ) : (
                  <div
                    onClick={handleSignOut}
                    className="text-gray-300 hover:bg-purple-500 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                  >
                    Sign out
                  </div>
                )}
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
                <Link
                  to="/signin"
                  className="text-gray-300 hover:bg-purple-500 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="text-gray-300 hover:bg-purple-500 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
