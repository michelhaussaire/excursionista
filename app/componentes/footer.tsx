import React from "react";

const Footer = () => {
  return (
    <div className="bg-gradient-to-tr from-pink-500/10 to-yellow-500/10 text-neutral-400 py-1">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Excursionista. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
};

export default Footer;