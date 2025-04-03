import React, { useState } from "react";
import { Container, Logo, LogoutBtn } from "./index";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ];

  return (
    <header className="bg-gray-500 text-white shadow-md py-4">
      <Container>
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <Logo width="80px" />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6">
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className={`px-4 py-2 rounded-lg transition ${
                        location.pathname === item.slug
                          ? "bg-blue-500 text-white"
                          : "hover:bg-gray-700"
                      }`}
                    >
                      {item.name}
                    </button>
                  </li>
                )
            )}
            {authStatus && <LogoutBtn />}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <ul className="md:hidden mt-4 space-y-3 bg-gray-600 p-4 rounded-lg">
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <button
                      onClick={() => {
                        navigate(item.slug);
                        setMenuOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 rounded-lg transition ${
                        location.pathname === item.slug
                          ? "bg-blue-500 text-white"
                          : "hover:bg-gray-700"
                      }`}
                    >
                      {item.name}
                    </button>
                  </li>
                )
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        )}
      </Container>
    </header>
  );
}

export default Header;
