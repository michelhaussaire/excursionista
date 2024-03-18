'use client'
import React from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

const Productos = () =>  {
  const list = [
    {
      title: "Argentina",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tripsavvy.com%2Fthmb%2F_ilC_QeCDxb421Hkj89jX-gxHbU%3D%2F1500x1000%2Ffilters%3Afill(auto%2C1)%2FGettyImages-563827877-57bf1249e3d742c3ab64ccfa0c3cd8b7.jpg&f=1&nofb=1&ipt=678c0ae0c51573e6b576017e16a8caf479f9953756e3bb1e36b6d45921b283a5&ipo=images",
      price: "$99.99",
    },
    {
      title: "España",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F8%2F8f%2FVista_general_de_Toledo_(Espa%25C3%25B1a)_01.jpg&f=1&nofb=1&ipt=9b0d4d87aa97d70062e52cd1f7adc817823691cef8b12e4cfdc64cdaa0b2f8dd&ipo=images",
      price: "$149.99",
    },
    {
      title: "Suiza",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftipsparatuviaje.com%2Fwp-content%2Fuploads%2F2019%2F10%2Fzurich-suiza.jpg&f=1&nofb=1&ipt=e906c6c6310b832ef8a7c6a1579a540f629377a6d38ba8624539e897d48ddff6&ipo=images",
      price: "$180.00",
    },
    {
      title: "Portugal",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.architecturaldigest.com%2Fphotos%2F5cafb581b9cd00e2f66a447a%2Fmaster%2Fw_1600%252Cc_limit%2FFD6688.jpg&f=1&nofb=1&ipt=aae68c3c129d378bebbdd28b479492cc5eecb047f058b0d5a0fbd47cb17d5a78&ipo=images",
      price: "$249.99",
    },
    {
      title: "China",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.britannica.com%2F54%2F122154-050-4DA0F697%2FGreat-Wall-of-China.jpg&f=1&nofb=1&ipt=9042d753c06957985723cfb33f36171fe2e39f98729381a86edd3dd338c6fc7a&ipo=images",
      price: "$349.99",
    },
    {
      title: "USA",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.almadeviajante.com%2Fwp-content%2Fuploads%2Fboston-eua.jpg&f=1&nofb=1&ipt=a07bbce208673da2ee73f12275abe0a79871423c68f3adae7f8df86a55be52b1&ipo=images",
      price: "$180.00",
    },
    {
      title: "Emiratos Arabes Unidos",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fa.cdn-hotels.com%2Fgdcs%2Fproduction121%2Fd772%2F6b5a9a4c-fd06-4bcf-b2f0-d979e3704cf9.jpg&f=1&nofb=1&ipt=2f9794fc0167cc63f3e6dbc09d75cddac6918b0ab8f2d74f1620254ef7b9295f&ipo=images",
      price: "$275.00",
    },
    {
      title: "Singapore",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.roadaffair.com%2Fwp-content%2Fuploads%2F2019%2F09%2Faerial-view-night-singapore-shutterstock_748173625.jpg&f=1&nofb=1&ipt=1d4710e1767325d05bd3f5509544708033da03b709e98228ee8f176cc712f44a&ipo=images",
      price: "$319.99",
    },
  ];

  return (
    <div className="gap-4 grid grid-cols-1 md:grid-cols-2 px-16 mx-8">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[240px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default Productos;