import React from "react";

function Header() {
  return (
    <div>
      <header>
        <nav>
          <a href="/">User Profile</a>
          <a href="/login">Login</a>
          <a href="/logout">Log out</a>
          <a href="/create-account">Create Account</a>
        </nav>
      </header>
    </div>
  );
}

export default Header;
