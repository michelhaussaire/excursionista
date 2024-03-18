import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
   <div className="text-black py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">¡Bienvenido a Excursionista!</h1>
        <p className="text-lg md:text-xl lg:text-2xl">Explora destinos, encuentra aventuras. Descubre tu próximo viaje con nuestras guías y recomendaciones de viajes y turismo</p>
        <a href="/servicios">
          <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg m-8">
            Comenzar ahora
          </Button>
        </a>
      </div>
    </div> 
  );
};

export default Hero;