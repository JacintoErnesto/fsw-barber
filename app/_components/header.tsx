import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from './ui/card'
import { Sheet, SheetTrigger } from './ui/sheet'
import { MenuIcon } from 'lucide-react'
import { Button } from './ui/button'
import SidebarSheets from './sidebar-sheets'



const Header = () => {
  return (
    <div>
      <Card>
        <CardContent className='p-5 flex flex-row justify-between items-center'>
          <Image src="/logo.png" alt="FSW Barber" width={120} height={18} />
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline">
                <MenuIcon />
              </Button>
            </SheetTrigger>

          <SidebarSheets/>
        </Sheet>
        </CardContent>
      </Card>
    </div>
  )
}

export default Header
