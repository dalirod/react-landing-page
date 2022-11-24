import React from "react";



const Navbar = () => {
return (
<nav className="navbar navbar-expand-lg bg-dark ">
  <div className="container-fluid">
    <a className="navbar-brand text-bg-dark p-3" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-end me-4" id="navbarNav">
      <ul className="navbar-nav color">
        <li className="nav-item ">
          <a className="nav-link active text-bg-dark p-3" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-bg-dark p-3" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-bg-dark p-3" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled text-bg-dark p-3">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>




);

};

export default Navbar;