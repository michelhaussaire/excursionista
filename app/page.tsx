import ImagenGrid from "./componentes/imagengrid"
import Hero from "./componentes/hero";
import Reseñas from "./componentes/reseñas";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <div className="my-2 flex justify-center">
        <ImagenGrid/>
      </div>
      <div className="m-4">
        <h2 className="m-2 font-bold text-xl text-center">Algunas de las experiencias ofrecidas</h2>
        <div className="flex justify-center">
          <Reseñas/>
        </div>
      </div>
    </main>
  );
}
