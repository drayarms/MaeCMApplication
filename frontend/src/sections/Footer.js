import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="footer-panel" style={{minHeight:"400px", background:"#262626", color:"#fff"}}>
        <div className="container py-5">
          <h4>MC</h4>
          <p>Footer content placeholder</p>
        </div>
      </footer>
      <div className="bottom-bar d-flex align-items-center justify-content-end" style={{height:"40px", background:"#000", color:"#fff", paddingRight:"20px"}}>
        <small>© 2001 - 2024 MC.com. License Number: 886471. All rights reserved.</small>
      </div>
    </>
  );
}
