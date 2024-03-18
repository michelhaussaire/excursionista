import Image from 'next/image'
import React from 'react'

const Reseñas = () => {
  return (
    <div className="max-w-2xl flex flex-col justify-center gap-6 m-8 p-2">
        <div className="max-w-sm w-full lg:max-w-full lg:flex">
            <div className="h-48 lg:h-auto lg:w-64 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-[url('/imagenes/ushuaia-argentina.jpeg')]" title="Ushuahia nevada">
            </div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <div className="text-gray-900 font-bold text-xl mb-2">Explorando el Fin del Mundo</div>
                    <p className="text-gray-700 text-base">¡La aventura en Ushuaia fue inolvidable! Desde el aire puro hasta los picos nevados, cada momento fue mágico. Caminatas en el Parque Nacional Tierra del Fuego, navegación por el Canal Beagle y la calidez de la gente local hicieron de este viaje una experiencia única.</p>
                </div>
                <div className="flex items-center">
                <Image className="w-10 h-10 rounded-full mr-4" src="/imagenes/man.png" width={50} height={50} alt="Avatar of Jonathan Reinink" />
                <div className="text-sm">
                    <p className="text-gray-900 leading-none">Javier García</p>
                    <p className="text-gray-600">Agosto 18</p>
                </div>
                </div>
            </div>
        </div>
        <div className="max-w-sm w-full lg:max-w-full lg:flex">
            <div className="h-48 lg:h-auto lg:w-64 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-[url('/imagenes/newyork.jpg')]" title="New York en navidad">
            </div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <div className="text-gray-900 font-bold text-xl mb-2">Luces Brillantes y Espíritu Festivo</div>
                    <p className="text-gray-700 text-base">Pasar la Navidad en Nueva York fue como estar en un cuento de hadas. Las calles iluminadas, la pista de hielo en Rockefeller Center y los mercados navideños crearon una atmósfera mágica. Central Park cubierto de nieve y el espíritu festivo en cada esquina hicieron que este viaje fuera inolvidable.</p>
                </div>
                <div className="flex items-center">
                <Image className="w-10 h-10 rounded-full mr-4" src="/imagenes/woman.png" width={50} height={50} alt="Avatar of Jonathan Reinink" />
                <div className="text-sm">
                    <p className="text-gray-900 leading-none">Emily Thompson</p>
                    <p className="text-gray-600">Diciembre 24</p>
                </div>
                </div>
            </div>
        </div>
        <div className="max-w-sm w-full lg:max-w-full lg:flex">
            <div className="h-48 lg:h-auto lg:w-64 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-[url('/imagenes/dubai.jpg')]" title="Dubai ciudad">
            </div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <div className="text-gray-900 font-bold text-xl mb-2">Un Oasis de Modernidad y Tradición</div>
                    <p className="text-gray-700 text-base">Dubái me dejó sin palabras con su mezcla de arquitectura futurista y cultura tradicional. Desde el Burj Khalifa hasta los zocos llenos de vida, cada rincón tenía su encanto. La hospitalidad árabe y el lujo de los hoteles hicieron que mi visita fuera una experiencia extraordinaria.</p>
                </div>
                <div className="flex items-center">
                <Image className="w-10 h-10 rounded-full mr-4" src="/imagenes/man.png" width={50} height={50} alt="Avatar of Jonathan Reinink" />
                <div className="text-sm">
                    <p className="text-gray-900 leading-none">Carlos Martínez</p>
                    <p className="text-gray-600">Mayo 23</p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reseñas