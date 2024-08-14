
import { db } from "@/app/_lib/prisma";
import Image from "next/image";
import { Button } from "@/app/_components/ui/button";
import { ChevronLeftIcon, Key, MapIcon, MapPinIcon, MenuIcon, SmartphoneIcon, StarIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import ServiceItem from "@/app/_components/service-item";
import PhoneItem from "@/app/_components/phone-item";
import Footer from "@/app/_components/footer";


interface BarbershopsProps {
    params: {
        id: string
        name: string;
        address: string;
        phones: string[];
        description: string;
        imageUrl: string;
        createdAt: Date;
        updatedAt: Date | null;
    }
}

const BarbershopsPage = async ({ params }: BarbershopsProps) => {
    const barbershop = await db.barbershop.findUnique({
        where: {
            id: params.id
        },
        include: {
            services: true
        }
    })

    if (!barbershop) {
        return notFound
    }



    return (
        <div>

            <div className="relative w-full h-[250px]">

                <Image
                    alt={barbershop.name}
                    src={barbershop.imageUrl}
                    fill
                    className="object-cover"
                />
                <Button
                    size="icon"
                    variant="secondary"
                    className="absolute top-4 left-4"
                    asChild
                >
                    <Link href="/">
                        <ChevronLeftIcon />
                    </Link>

                </Button>

                <Button
                    size="icon"
                    variant="secondary"
                    className="absolute top-4 right-4"
                    asChild
                >
                    <Link href="/">
                        <MenuIcon />
                    </Link>

                </Button>
            </div>

            {/* Título */}

            <div className="p-5 border-b border-solid">
                <h1 className="mb-3 text-xl font-bold">{barbershop.name}</h1>
                <div className="mb-2 flex items-center gap-2">
                    <MapPinIcon className="text-primary" size={18} />
                    <p className="text-sm">{barbershop.address}</p>
                </div>
                <div className="flex items-center gap-1">
                    <StarIcon className="text-primary fill-primary" size={18} />
                    <p className="text-sm">5,0 (499 avaliações)</p>
                </div>
            </div>

            {/* Descrição */}

            <div className="p-5 border-solid border-b space-y-5">
                <h2 className="text-xs font-bold uppercase text-gray-400"> Sobre nós</h2>
                <p className="text-sm text-justify"> {barbershop.description}</p>
            </div>

            {/* Serviços */}

            <div className="space-y-3 p-5 ">
                <h2 className="text-xs font-bold uppercase text-gray-400"> Serviços</h2>
                <div className="space-y-3">
                    {barbershop.services.map((service) => (<ServiceItem key={service.id} service={service} />
                    ))}
                </div>
            </div>

            <div className="p-5">
                {barbershop.phones.map((phone) => (
                   <PhoneItem key={phone} phone={phone}/>
                ))}
            </div>
          
        </div>
    );
}

export default BarbershopsPage;