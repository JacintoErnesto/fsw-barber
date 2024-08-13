import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { MenuIcon } from 'lucide-react'

const Header = () => {
  return (
    <div>
      <Card>
        <CardContent className='p-5 flex flex-row justify-between items-center'>
          <Image src="/logo.png" alt="FSW Barber" width={120} height={18} />
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default Header
