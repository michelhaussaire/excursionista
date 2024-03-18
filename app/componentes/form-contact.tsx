'use client'
import React from "react";
import {Button, Input , Textarea} from "@nextui-org/react";

const FormContacto = () => {
  return (
    <div className="bg-gray-100 rounded-lg p-12">
      <div>
        <div className="flex flex-col justify-center mb-8">
          <div className="m-4">
            <h2 className="text-3xl font-semibold mb-8 underline underline-offset-4">Contacto</h2>
            <p className="mb-4">¿Tienes alguna pregunta o deseas obtener más información? ¡No dudes en contactarnos!</p>
            <p className="mb-4">Dirección: Alsina 123, Bahia Blanca, Buenos Aires, Argentina</p>
            <p className="mb-4">Teléfono: +54 (291) 123-4567</p>
            <p className="mb-4">Correo electrónico: info@excursionista.com</p>
          </div>
        </div>
        <div className="m-8 flex justify-center">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1556.5214744567786!2d-62.26313937605513!3d-38.716822911742405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95edbcb27e1b303d%3A0x4278ed8b6db56a20!2sPlaza%20Rivadavia!5e0!3m2!1ses-419!2sar!4v1710256170056!5m2!1ses-419!2sar" width="90%" height={350} loading="lazy"></iframe>
        </div>
        <div className="flex justify-center border-solid border-1 border-neutral-300/30 rounded-2xl mt-16 py-8">
          <div className="w-4/5 flex flex-col gap-4">
            <h2 className="font-normal text-lg underline">Dejanos tu mensaje</h2>
            <Input type="email" variant={"underlined"} label="Email" />
            <Textarea label="Mensaje" variant="bordered"/> 
            <Button size="md">Enviar</Button>
          </div>  
        </div>
      </div>
    </div>
  );
}
export default FormContacto;