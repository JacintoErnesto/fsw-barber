import { Button } from './ui/button'
import { CalendarIcon, HomeIcon, icons, LogInIcon, LogOutIcon } from 'lucide-react'
import { SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { quickSearchOptions } from '../_constants/search'
import { AvatarImage } from '@radix-ui/react-avatar'
import { Avatar } from './ui/avatar'
import Link from 'next/link'
import Image from 'next/image'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
const SidebarSheets = () => {
  return (

    <SheetContent className='overflow-y-auto'>
      <SheetHeader>
        <SheetTitle className='text-left'>Menu</SheetTitle>
      </SheetHeader>
      <div className='py-5 justify-between border-b gap-3 flex items-center border-solid'>
        <h2 className='font-bold'>Olá, Faça o seu login</h2>
        <Dialog>
          <DialogTrigger>
            <Button size="icon">
              <LogInIcon />
            </Button>
          </DialogTrigger>
          <DialogContent className='w-[90%]'>
            <DialogHeader>
              <DialogTitle>
               Faça login na plataforma
              </DialogTitle>
              <DialogDescription>
              Conecta-se usando o google sua conta google
              </DialogDescription>
            </DialogHeader>
            <Button variant='outline'  className='gap-1 font-bold'>
            <Image 
            src="/google.svg" 
            alt='Google' 
            width={18} 
            height={18} 
            />
            Google
            </Button>
           
          </DialogContent>
        </Dialog>


        {/*<Avatar>
          <AvatarImage src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww' />
        </Avatar>
        <div>
          <p className='font-bold'>Jacinto Mendes</p>
          <p className='text-xs'>mendesjacinto8@gmail.com</p>
        </div>*/}

      </div>
      <div className='flex flex-col gap-2 py-5'>
        <SheetClose asChild>
          <Button className='justify-start gap-2' variant="ghost" asChild>
            <Link href="/">
              <HomeIcon size={18} />
              Início
            </Link>

          </Button>
        </SheetClose>
        <Button className='justify-start gap-2 border-b' variant="ghost">
          <CalendarIcon />
          Agendamentos
        </Button>
      </div>

      <div className='flex flex-col gap-2 py-5 border-b'>
        {quickSearchOptions.map((option) => (
          <Button key={option.title} className='justify-start gap-2 ' variant="ghost">
            <Image src={option.imageUrl} width={18} height={18} alt={option.title} />
            {option.title}
          </Button>
        ))}
      </div>

      <div className='flex flex-col gap-2 py-5'>

        <Button className='justify-start gap-2'>
          <LogOutIcon size={18} />
          Sair da conta
        </Button>

      </div>
    </SheetContent>


  );
}

export default SidebarSheets;