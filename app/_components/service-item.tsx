import { BarbershopService } from "@prisma/client";
import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface ServiceProps {
    service: BarbershopService
}

const ServiceItem = ({ service }: ServiceProps) => {
    return (
        <Card>
            <CardContent className="flex items-center gap-3 p-3">

                {/* Iamgem */}
                <div className="relative max-h-[110px] min-h-[110px] max-w-[110px] min-w-[110px]">
                    <Image alt={service.name} src={service.imageUrl} fill className="rounded-lg object-cover" />
                </div>

                {/* Direita */}
                <div className="space-y-2">
                    <h3 className="font-semibold text-sm">{service.name}</h3>
                    <p className="text-sm text-gray-400">{service.description}</p>
                    <div className="flex items-center justify-between">
                        <p className="text-sm text-primary">
                            {Intl.NumberFormat('pt-AO', {
                                style: 'currency',
                                currency: 'AOA'
                            }).format(Number(service.price))}
                        </p>
                        <Button variant="secondary" size="sm"> Reservar</Button>
                    </div>
                </div>

            </CardContent>
        </Card>
    );
}



export default ServiceItem;