import React from "react";

function Footer() {
  return (
    <div className="text-2xl bg-[#FF5500]">
      <footer className=" py-4 text-center text-white">
        <p>&copy; {new Date().getFullYear()} Jebena. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Footer;
