import { FootprintsIcon, HandIcon, SearchIcon } from "lucide-react";
import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import Image from "next/image";
import { Input } from "./_components/ui/input";
import { Card, CardContent } from "./_components/ui/card";
import { Badge } from "./_components/ui/badge";
import { Avatar, AvatarImage } from "./_components/ui/avatar";
import { db } from './_lib/prisma'
import BarbershopItem from "./_components/barbershop- items";



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
          <Button className="gap-2" variant="secondary">
            <Image
              src="/cabelo.svg"
              height={16}
              width={16}
              alt="Cabelo" />
            Cabelo
          </Button>

          <Button className="gap-2" variant="secondary">
            <Image
              src="/barba.svg"
              height={16}
              width={16}
              alt="Barba" />
            Barba
          </Button>

          <Button className="gap-2" variant="secondary">
            <Image
              src="/acabamento.svg"
              height={16}
              width={16}
              alt="Acabamento" />
            Acabamento
          </Button>

          <Button className="gap-2" variant="secondary">
            <Image
              src="/hidratacao.svg"
              height={16}
              width={16}
              alt="Hidração" />
            Hidração
          </Button>

          <Button className="gap-2" variant="secondary">
            <Image
              src="/massagem.svg"
              height={16}
              width={16}
              alt="Massagem" />
            Massagem
          </Button>
          <Button className="gap-2" variant="secondary">
           <FootprintsIcon size={16}/>
            Unhas dos pés
          </Button>

          <Button className="gap-2" variant="secondary">
           <HandIcon size={16}/>
            Unhas das mãos
          </Button>
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

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Agendamentos
        </h2>
        <Card >

          <CardContent className="flex justify-between p-0">
            {/* Equerda */}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3>Corte de cabelo</h3>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                </Avatar>
                <p>Barbearia FSW</p>
              </div>
            </div>
            {/* Direita */}
            <div className="flex flex-col items-center justify-center px-5 border-l-2">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">13</p>
              <p className="text-sm">09:20</p>
            </div>
          </CardContent>
        </Card>


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
      <footer>

        <Card className="px-5 ">
          <CardContent className="text-sm text-gray-400">
            <p className="mt-5">
              @ 2024 Copyright <span className="font-bold">FSW Barber</span>

            </p>
          </CardContent>
        </Card>

      </footer>


    </div>
  )

}

export default Home
