'use client'
import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

const Staff = () =>  {
  return (
    <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 grid-rows-2 p-4">
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Carlos Martínez</p>
        <small className="text-default-500">7 años</small>
        <h4 className="font-bold text-large">Director de Operaciones</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1542190891-2093d38760f2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={270}
        />
      </CardBody>
    </Card>
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Juan García</p>
        <small className="text-default-500">5 años</small>
        <h4 className="font-bold text-large">Director de Ventas</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1594751684241-bcef815d5a57?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={270}
        />
      </CardBody>
    </Card>
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Miguel Sánchez</p>
        <small className="text-default-500">4 años</small>
        <h4 className="font-bold text-large">Gerente de Marketing</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1627729085140-e0912b70e79e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={270}
        />
      </CardBody>
    </Card>
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Carlos Martínez</p>
        <small className="text-default-500">3 años</small>
        <h4 className="font-bold text-large">Coordinador de RH</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1627729205753-52d2ddeefce1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={270}
        />
      </CardBody>
    </Card>
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">María Rodríguez</p>
        <small className="text-default-500">3 años</small>
        <h4 className="font-bold text-large">Coordinadora de Marketing</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1584361853901-dd1904bb7987?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={270}
        />
      </CardBody>
    </Card>
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Pedro López</p>
        <small className="text-default-500">1 años</small>
        <h4 className="font-bold text-large">Asistente Ejecutivo</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1618284554746-71a7b3e923c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={270}
        />
      </CardBody>
    </Card>
    </div>
  );
}

export default Staff;