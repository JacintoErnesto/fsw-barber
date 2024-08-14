"use client"
import { SmartphoneIcon } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";


interface PhoneItemProps {
    phone: string
}


const PhoneItem = ({ phone }: PhoneItemProps) => {

    const handlerCopyPhoneClick = (phone: string) => {
        navigator.clipboard.writeText(phone);
        toast.success("Telefone copiado com sucesso")
    }
    return (
        <div className="flex justify-between space-y-3" key={phone}>
            {/* Esquerda */}
            <div className="flex items-center">
                <SmartphoneIcon />
                <p className="text-sm gap-2">{phone}</p>
            </div>
            {/* Direita */}
            <Button variant="outline"
            size="sm"
            onClick={()=> handlerCopyPhoneClick(phone)}
            >
                Copiar
            </Button>
        </div>
    );
}

export default PhoneItem;