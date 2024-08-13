import { SearchIcon } from "lucide-react";
import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import Image from "next/image";
import { Input } from "./_components/ui/input";
import { Card, CardContent } from "./_components/ui/card";
import { Badge } from "./_components/ui/badge";
import { Avatar, AvatarImage } from "./_components/ui/avatar";



export default function Home() {

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
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner-01.png"
            alt="Agende nos melhores FSW Barber"
            fill
            className="object-cover rounded-xl" />
        </div>

        <Card className="mt-6">
         
          <CardContent className="flex justify-between p-0">
             {/* Equerda */}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3>Corte de cabelo</h3>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"/>
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

      </div>

    </div>
  )

}
