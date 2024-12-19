import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <section className="max-w-[1400px] min-h-screen p-4 m-auto">
      <Header />
      {children}
      <Footer />
    </section>
  );
};

export default Layout;
