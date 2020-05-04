import React from "react";
import '../../App.css'
// import "./Navbar.css"

const Welcome = ({ stickyRef }) => (
  <main>
    <section className="welcome">
      <div ref={stickyRef}>
      </div>
    </section>
  
  </main>
);

export default Welcome;