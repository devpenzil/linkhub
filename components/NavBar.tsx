import React from "react";

function NavBar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">LinkHub</a>
      </div>
      <div className="flex-none">
        <button className="btn  btn-ghost">Login</button>
      </div>
    </div>
  );
}

export default NavBar;
