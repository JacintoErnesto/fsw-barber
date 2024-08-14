import { SearchIcon } from "lucide-react";
import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import Image from "next/image";
import { Input } from "./_components/ui/input";
import { db } from './_lib/prisma'
import BarbershopItem from "./_components/barbershop- items";
import { quickSearchOptions } from "./_constants/search";
import Booking from "./_components/booking-item";




const Home = async () => {


  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    }
  })


  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Jacinto</h2>
        <p>Terça-feira, 13 de Agosto</p>
        <div className="flex items-center gap-2 mt-6">
          <Input placeholder="Faça a sua busca ..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>
        {/* Busca rapida */}

        <div className="mt-6 flex gap-3 overflow-x-scroll [&::webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button className="gap-2" variant="secondary" key={option.title}>
              <Image
                src={option.imageUrl}
                height={16}
                width={16}
                alt={option.title} />
              {option.title}
            </Button>

          ))}

        </div>

        {/* Banner */}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner-01.png"
            alt="Agende nos melhores FSW Barber"
            fill
            className="object-cover rounded-xl" />
        </div>
        {/* Agendamentos */}
        <Booking/>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-2 overflow-auto [&::webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Populares
        </h2>
        <div className="flex gap-2 overflow-auto [&::webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

      </div>
     

    </div>
  )

}

export default Home
