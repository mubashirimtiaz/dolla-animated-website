import React, { useState } from "react";
import { Topbar, Navbar } from "../../components";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    console.log("test");
    return setIsOpen(!isOpen);
  };
  return (
    <>
      <Topbar toggleIsOpen={toggleIsOpen} isOpen={isOpen} />
      <Navbar toggleIsOpen={toggleIsOpen} />
    </>
  );
};

export default Home;
